import { Outlet } from "react-router-dom"
function Layout() {
    return (
        <div className="barra">
            <nav>
            <a class="nav-link" href="/"><strong className="nav">Inicio</strong></a>
            <a class="nav-link" href="/about"><strong className="nav">Conocenos</strong></a>
            <a class="nav-link" href="/services"><strong className="nav">Servicios</strong></a>
            <a class="nav-link" href="/contact"><strong className="nav">Contacto</strong></a>
            </nav>
            <Outlet />
        </div>
    );
}
export default Layout
