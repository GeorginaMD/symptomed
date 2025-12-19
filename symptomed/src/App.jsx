import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import "./styles/reset.css"
import "./App.css"
import Navbar from "./components/Navbar"
import HomeSection from "./pages/home-page/HomeSection"
import OpenFdaCategoriesSection from "./pages/open-fda-categories/OpenFdaCategoriesSection"
import FdaDrugsSection from "./pages/open-fda-drugs/FdaDrugsSection"

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
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
        path: "open-fda-drugs",
        element: <FdaDrugsSection />
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
