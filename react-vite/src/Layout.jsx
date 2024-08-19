import { Outlet } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <div className="text-light">
        <Header/>
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
          <Outlet />
        <Footer descripcion="Proyecto de React con vite" />
      </div>
    </>
  )
}

export default Layout