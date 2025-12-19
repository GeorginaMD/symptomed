import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import "./styles/reset.css"
import "./App.css"
import Navbar from "./components/Navbar"
import HomeSection from "./pages/home-page/HomeSection"

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
        //index: true, 
        path: "home-page", 
        element: <HomeSection />
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
