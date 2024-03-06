import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import components
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import AdminProfile from "./components/admin/AdminProfile.jsx";
import AdminSettings from "./components/admin/AdminSettings.jsx";
import UserLayout from "./layout/UserLayout.jsx";
import UserLeadsTable from "./components/user/UserLeadsTable.jsx";
import AdminUserTable from "./components/admin/AdminUserTable.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { UsersProvider } from "./context/UsersContext.jsx";
import { LeadProvider } from "./context/LeadContext.jsx";
import ViewLead from "./components/user/ViewLead.jsx";
import EditLead from "./components/user/EditLead.jsx";
import ViewOpportunites from "./components/user/ViewOpportunites.jsx";
import { OpportunityProvider } from "./context/OpportunityContext.jsx";

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
        element: <ViewLead />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <LeadProvider>
          <OpportunityProvider>
            <RouterProvider router={router} />
          </OpportunityProvider>
        </LeadProvider>
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);
