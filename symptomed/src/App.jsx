import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
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
import RegisterProfileSection from "./pages/user-dashboard-registration/RegisterProfileSection"
import LoginSection from "./pages/login-page/LoginSection"
import LoginProfileSection from "./pages/user-dashboard-login/LoginProfileSection"
import DemoSection from "./pages/demo-page/DemoSection"
import DemoLoginProfileSection from "./pages/user-dashboard-demo-login/DemoLoginProfileSection"
import Footer from "./components/Footer"

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
        element: <SupplementsSection />
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
        path: "user-dashboard-registration",
        element: <RegisterProfileSection />
      },
      {
        path: "login-page",
        element: <LoginSection />
      },
      {
        path: "user-dashboard-login",
        element: <LoginProfileSection />
      },
      {
        path: "demo-login-page",
        element: <DemoSection />
      },
      {
        path: "user-dashboard-demo-login",
        element: <DemoLoginProfileSection />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
