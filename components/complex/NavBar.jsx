import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavBarLink from '../simple/NavBarLink';
import Button from 'react-bootstrap/Button';

const NavBar = ({ pathname }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Busco a mi mascota</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavBarLink activeLink={pathname} className='p-2' href='/'>
                        Inicio
                    </NavBarLink>
                    <NavBarLink activeLink={pathname} className='p-2' href='/mascotas/perdidas'>
                        Mascotas perdidas
                    </NavBarLink>
                    <NavBarLink activeLink={pathname} className='p-2' href='/mascotas/adopcion'>
                        Mascotas en adopción
                    </NavBarLink>
                    <NavBarLink activeLink={pathname} className='p-2' href='blog'>
                        Blog
                    </NavBarLink>
                    <NavBarLink activeLink={pathname} className='p-2' href='signin'>
                        Registrarse
                    </NavBarLink>
                </Nav>
                <Nav className="ml-auto">
                    <NavBarLink activeLink={pathname} className='p-2' href='login'>
                        Iniciar sesion
                    </NavBarLink>
                </Nav>
                <Nav>
                    <NavBarLink href='mascotas/publicar' activeLink={pathname}>
                        <Button variant='outline-danger'>
                            Publicar
                        </Button>
                    </NavBarLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;