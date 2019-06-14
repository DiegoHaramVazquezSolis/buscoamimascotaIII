import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavBarLink from '../simple/NavBarLink';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Busco a mi mascota</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavBarLink active className='p-2' href='/'>
                        Inicio
                    </NavBarLink>
                    <NavBarLink className='p-2' href='/mascotas/perdidas'>
                        Mascotas perdidas
                    </NavBarLink>
                    <NavBarLink className='p-2' href='/mascotas/adopcion'>
                        Mascotas en adopción
                    </NavBarLink>
                    <NavBarLink className='p-2' href='blog'>
                        Blog
                    </NavBarLink>
                    <NavBarLink className='p-2' href='signin'>
                        Registrarse
                    </NavBarLink>
                    {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>*/}
                </Nav>
                <Nav className="ml-auto">
                    <NavBarLink className='p-2' href='login'>
                        Iniciar sesion
                    </NavBarLink>
                </Nav>
                <Nav>
                    <NavBarLink href='mascotas/publicar'>
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