import { Outlet } from "react-router-dom";
// components
import Navbar from "../components/Navbar";


function MainLayout() {
  return (
    <>  
        {/* header */}
        <header>
            <Navbar/>
        </header>
        {/* main */}
        <main>
            <Outlet/>
        </main>
        {/* footer */}
        <footer>

        </footer>
    </>
  )
}

export default MainLayout