import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { lazy } from "react";
// import components

const AdminLogin = lazy(() => import("./pages/AdminLogin.jsx"));
const AdminLayout = lazy(() => import("./layout/AdminLayout.jsx"));
const AdminProfile = lazy(() => import("./components/admin/AdminProfile.jsx"));
const AdminSettings = lazy(() =>
  import("./components/admin/AdminSettings.jsx")
);
const UserLayout = lazy(() => import("./layout/UserLayout.jsx"));
const UserLeadsTable = lazy(() =>
  import("./components/user/UserLeadsTable.jsx")
);
const AdminUserTable = lazy(() =>
  import("./components/admin/AdminUserTable.jsx")
);
import { AuthProvider } from "./context/AuthContext.jsx";
import { UsersProvider } from "./context/UsersContext.jsx";
import { LeadProvider } from "./context/LeadContext.jsx";
import Loader from "./components/Loader.jsx";
import LeadPage from "./components/user/LeadPage.jsx";
import UserProfile from "./components/user/UserProfile.jsx";
import Setting from "./components/user/Setting.jsx";

const ViewLead = lazy(() => import("./components/user/ViewLead.jsx"));
const EditLead = lazy(() => import("./components/user/EditLead.jsx"));
const ViewOpportunites = lazy(() =>
  import("./components/user/ViewOpportunites.jsx")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  // admin routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminUserTable />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
    ],
  },
  //user routes
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <UserLeadsTable />,
      },
      {
        path: "lead/:leadId",
        element: <LeadPage />,
      },
      {
        path: "lead/edit/:leadId",
        element: <EditLead />,
      },
      {
        path: "opportunity",
        element: <ViewOpportunites />,
      },
      {
        path: "opportunity",
        element: <ViewOpportunites />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <LeadProvider>
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
        </LeadProvider>
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);
