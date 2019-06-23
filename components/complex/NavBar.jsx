import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBarLink from '../simple/NavBarLinks/NavBarLink';
import TextForButtons from '../styled/TextForButtons';
import Body1 from '../styled/Body/Body1';
import NavBarDropdownLink from '../simple/NavBarLinks/NavBarDropdownLink';
import { signOut } from '../../firebase/auth';

const NavBar = ({ pathname, user }) => {
    if (user == null) {
        return (<h1>Cargando</h1>);
    }
    return (
        <Navbar bg='light' expand='lg' className='shadow-sm pb-3 mb-4'>
            <Navbar.Brand href='#home' className='pl-2 pr-2 pt-2'>Busco a mi mascota</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <NavBarLink activeLink={pathname} className='pl-2 pr-2 pt-4' href='/'>
                        <Body1>
                            Inicio
                        </Body1>
                    </NavBarLink>
                    <NavBarLink activeLink={pathname} className='pl-2 pr-2 pt-4' href='/mascotas/perdidas'>
                        <Body1>
                            Mascotas perdidas
                        </Body1>
                    </NavBarLink>
                    <NavBarLink activeLink={pathname} className='pl-2 pr-2 pt-4' href='/mascotas/adopcion'>
                        <Body1>
                            Mascotas en adopción
                        </Body1>
                    </NavBarLink>
                    <NavBarLink activeLink={pathname} className='pl-2 pr-2 pt-4' href='/blog'>
                        <Body1>
                            Blog
                        </Body1>
                    </NavBarLink>
                    {!user &&
                        <NavBarLink activeLink={pathname} className='pl-2 pr-2 pt-4' href='/signin'>
                            <Body1>
                                Registrarse
                            </Body1>
                        </NavBarLink>
                    }
                </Nav>
                <Nav className='ml-auto'>
                    {!user ?
                        <NavBarLink activeLink={pathname} className='pl-2 pr-2 pt-4 mr-2' href='/login'>
                            <Body1>
                                Iniciar sesión
                            </Body1>
                        </NavBarLink>
                        :
                        <NavDropdown className='mr-1' title={<><i className='fas fa-user fa-lg mr-1'></i>Mi cuenta</>} id='user-options'>
                            <NavBarDropdownLink href='/usuario/perfil'>Perfil</NavBarDropdownLink>
                            <NavBarDropdownLink href='/usuario/publicaciones'>Mis publicaciones</NavBarDropdownLink>
                            <NavDropdown.Divider />
                            <Button className='dropdown-item' variant='none' onClick={signOut}>
                                Cerrar sesión
                            </Button>
                        </NavDropdown>
                    }
                </Nav>
                <Nav>
                    <NavBarLink href='/mascotas/publicar' activeLink={pathname} className='pt-2'>
                        <Button variant='outline-danger' size='sm'>
                            <TextForButtons className='p-1'>
                                Publicar
                            </TextForButtons>
                        </Button>
                    </NavBarLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;