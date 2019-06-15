import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { useReducer } from 'react';
import NavBar from '../components/complex/NavBar';
import H4Styled from '../components/styled/Headline/H4Styled';
import Subtitle1 from '../components/styled/Subtitle/Subtitle1';
import Body1 from '../components/styled/Body/Body1';
import TextForButtons from '../components/styled/TextForButtons';
import InputField from '../components/simple/InputField';

const Signin = ({ pathname }) => {
    const state = {
        name: '',
        email: '',
        password: '',
        verify: '',
        error:  ''
    };

    const reducer = (prevState, state) => {
        return { ...prevState, ...state };
    }

    const [ { name, email, password, verify, error }, setState ] = useReducer(reducer, state);

    function onChange (e) {
        setState({ [e.target.name]: e.target.value });
    }

    return (
        <>
            <Head>
                <title>Registrarse</title>
            </Head>
            <NavBar pathname={pathname} />
            <Container>
                <H4Styled>Iniciar sesion</H4Styled>
                <Subtitle1 className='text-muted mb-1'>
                    Esta información nos sirve para poder contactarte y trabajamos de forma activa por mantenerla siempre protegida.
                </Subtitle1>
                <Form>
                    <Row>
                        <Col sm='12' md='6' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Nombre completo
                                </Body1>
                            </Form.Label>
                            <InputField type='text'
                                className='family-open-sans'
                                placeholder='Nombre'
                                name='name'
                                value={name}
                                onChange={onChange} />
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Email
                                </Body1>
                            </Form.Label>
                            <InputField type='email'
                                className='family-open-sans'
                                placeholder='Correo electronico'
                                name='email'
                                value={email}
                                onChange={onChange} />
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Contraseña
                                </Body1>
                            </Form.Label>
                            <InputField type='password'
                                className='family-open-sans'
                                placeholder='Contraseña'
                                name='password'
                                value={password}
                                onChange={onChange} />
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Verificar
                                </Body1>
                            </Form.Label>
                            <InputField type='password'
                                className='family-open-sans'
                                placeholder='Verificar contraseña'
                                name='verify'
                                value={verify}
                                onChange={onChange} />
                        </Col>
                    </Row>
                    <ButtonToolbar className='d-flex justify-content-end'>
                        <Button className='outlined-button mt-3 mr-2' variant='none' type='reset'>
                            <TextForButtons className='pl-2 pr-2'>
                                Limpiar
                            </TextForButtons>
                        </Button>
                        <Button className='raised-button mt-3 mr-2' variant='none' type='submit'>
                            <TextForButtons className='pl-2 pr-2'>
                                Continuar
                            </TextForButtons>
                        </Button>
                    </ButtonToolbar>
                </Form>
            </Container>
        </>
    );
}

Signin.getInitialProps = ({ pathname }) => {
    return {
        pathname
    };
}

export default Signin;