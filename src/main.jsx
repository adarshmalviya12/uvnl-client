import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
const App = React.lazy(() => import("./App.jsx"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Loader from "./components/Loader.jsx";

// import components

// Import components using default import
const AdminLogin = React.lazy(() => import("./pages/AdminLogin.jsx"));
const AdminLayout = React.lazy(() => import("./layout/AdminLayout.jsx"));
const AdminProfile = React.lazy(() =>
  import("./components/admin/AdminProfile.jsx")
);
const AdminSettings = React.lazy(() =>
  import("./components/admin/AdminSettings.jsx")
);
const UserLayout = React.lazy(() => import("./layout/UserLayout.jsx"));
const UserLeadsTable = React.lazy(() =>
  import("./components/user/UserLeadsTable.jsx")
);
const AdminUserTable = React.lazy(() =>
  import("./components/admin/AdminUserTable.jsx")
);
const ViewLead = React.lazy(() => import("./components/user/ViewLead.jsx"));
const EditLead = React.lazy(() => import("./components/user/EditLead.jsx"));
const ViewOpportunites = React.lazy(() =>
  import("./components/user/ViewOpportunites.jsx")
);
const ViewOpportunity = React.lazy(() =>
  import("./components/user/ViewOpportunity.jsx")
);
const EditOpportunity = React.lazy(() =>
  import("./components/user/EditOpportunity.jsx")
);
const ViewUser = React.lazy(() => import("./components/admin/ViewUser.jsx"));

import { AuthProvider } from "./context/AuthContext.jsx";
import { UsersProvider } from "./context/UsersContext.jsx";
import { LeadProvider } from "./context/LeadContext.jsx";
import { OpportunityProvider } from "./context/OpportunityContext.jsx";
import EditUserDetails from "./components/admin/EditUserDetails.jsx";
import Category from "./components/admin/Category.jsx";
import Products from "./components/admin/Products.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import Opportunity from "./components/admin/Opportunity.jsx";
import OpportunityViewAdmin from "./components/admin/OpportunityViewAdmin.jsx";
import OpportunityEditAdmin from "./components/admin/OpportunityEditAdmin.jsx";

// kyc
import Kyc from "./components/admin/kyc/Kyc.jsx";
import UserDashboard from "./components/user/UserDashboard.jsx";
import UserPage from "./pages/UserPage.jsx";

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
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <AdminUserTable />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "opportunities",
        element: <Opportunity />,
      },
      {
        path: "opportunity/:opportunityId",
        element: <OpportunityViewAdmin />,
      },
      {
        path: "opportunity",
        element: <ViewOpportunites />,
      },
      {
        path: "opportunity/edit/:opportunityId",
        element: <OpportunityEditAdmin />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
      {
        path: "user/:userId",
        element: <ViewUser />,
      },
      {
        path: "user/edit/:userId",
        element: <EditUserDetails />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
      // kyc
      {
        path: "kyc",
        element: <Kyc />,
      },
      {
        path: "opportunity/:opportunityId",
        element: <OpportunityViewAdmin />,
      },
      {
        path: "opportunity",
        element: <ViewOpportunites />,
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
        element: <UserDashboard />,
      },
      {
        path: "leads",
        element: <UserPage />,
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
        path: "opportunity/:opportunityId",
        element: <ViewOpportunity />,
      },
      {
        path: "opportunity",
        element: <ViewOpportunites />,
      },
      {
        path: "opportunity/edit/:opportunityId",
        element: <EditOpportunity />,
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
            <Suspense fallback={<Loader />}>
              <RouterProvider router={router} />
            </Suspense>
          </OpportunityProvider>
        </LeadProvider>
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);
