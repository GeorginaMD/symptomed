import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import { useAuth } from "./context/AuthContext";
import "./styles/reset.css"
import "./App.css"
import Navbar from "./components/Navbar"
import HomeSection from "./pages/home-page/HomeSection"
import OpenFdaCategoriesSection from "./pages/open-fda-categories/OpenFdaCategoriesSection"
import OpenFdaDataDrugs from "./pages/open-fda-categories/OpenFdaDataDrugs"
import FdaDrugsSection from "./pages/open-fda-drugs/FdaDrugsSection"
import SupplementsSection from "./pages/all-supplements/SupplementsSection"
import OneSupplementSection from "./pages/one-supplement/OneSupplmentSection"
import RegisterSection from "./pages/register-page/RegisterSection"
import LoginSection from "./pages/login-page/LoginSection"
import LoginProfileSection from "./pages/user-dashboard-login/LoginProfileSection"
import DemoSection from "./pages/demo-page/DemoSection"
import DemoLoginProfileSection from "./pages/user-dashboard-demo-login/DemoLoginProfileSection"
import Footer from "./components/Footer"
import DemoLoginForm from "./pages/demo-page/DemoLoginForm"
import ProtectedRoute from "./components/ProtectedRoute";
import AllSupplements from "./pages/all-supplements/AllSupplements";


function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

//ROUTER CONFIGURATION OF THE COMPLETE ROUTING
//STRUCTURE THAT CONTAINS ALL THE ROUTES
const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <HomeSection />
      },
      {
        path: "open-fda-categories",
        element: <OpenFdaCategoriesSection />
      },
      {
        path: "open-fda-drugs/:query",
        element: <OpenFdaDataDrugs />
      },
      {
        path: "all-supplements",
        element: <AllSupplements />
      },
      {
        path: "one-supplement/:slug",
        element: <OneSupplementSection />
      },
      {
        path: "register-page",
        element: <RegisterSection />
      },
      {
        path: "login-page",
        element: <LoginSection />
      },
      {
        path: "demo-login-page",
        element: <DemoLoginForm/>
      },
      {
      element: <ProtectedRoute />,
      children: [
        {
          path: "user-dashboard-login",
          element: <LoginProfileSection />
        },
        {
          path: "user-dashboard-demo-login",
          element: <DemoLoginProfileSection />
        }
      ]
},

    ]
  }
])

function App() {
  const { loading } = useAuth();

  if (loading) { 
    return (
      <div className="server-loading">
        <img src="/images/capsule.webp" alt="Loading..." className="capsule-spinner" />
        <div className="loading-messages">
          <p className="p-server-loading">Connecting to server...</p>
          <p className="p-server-loading">This may take ~ 50-60 seconds...</p>
          <p className="p-server-loading">Thanks for your patience...</p>
          <p className="p-server-loading">Almost there...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
