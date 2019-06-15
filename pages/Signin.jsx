import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useReducer } from 'react';
import NavBar from '../components/complex/NavBar';
import H4Styled from '../components/styled/Headline/H4Styled';
import Subtitle1 from '../components/styled/Subtitle/Subtitle1';
import Body1 from '../components/styled/Body/Body1';
import TextForButtons from '../components/styled/TextForButtons';
import InputField from '../components/simple/InputField';
import FacebookLoginButton from '../components/simple/FacebookLoginButton';
import { createUserWithEmailAndPassword, updateUserProfileData, signInUserWithFacebook } from '../firebase/auth';
import { createUserProfile } from '../firebase/database';

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

    function resetForm() {
        setState({ name: '', email: '', password: '', verify: '' });
    }

    function onSubmit(e) {
        e.preventDefault();
        setState({ email: email.trim(), error: '' });
        if (isPasswordEqualToVerify()) {
            createUserWithEmailAndPassword(email, password)
            .then((user) => {
                updateUserProfileData({
                    displayName: name
                });
                const uid = user.user.uid;
                const userProfile = {
                    name: name,
                    email: email
                };
                createUserProfile(uid, userProfile);
            })
            .catch((error) => {
                determineErrorAndShowToUser(error.code)
            });
        } else {
            setState({ error: 'Las contraseñas no coinciden' });
        }
    }

    function isPasswordEqualToVerify() {
        return password === verify;
    }

    function determineErrorAndShowToUser(errorCode) {
        switch(errorCode) {
            case 'auth/email-already-in-use':
                setState({ error: 'Esta direccion de correo ya esta en uso' });
                break;
            case 'auth/invalid-email':
                setState({ error: 'La direccion de correo proporcionada no es valida' });
                break;
            case 'auth/weak-password':
                setState({ error: 'La contraseña debe tener al menos seis caracteres de longitud' });
                break;
            case 'auth/user-cancelled':
                setState({ error: 'Para acceder con facebook es necesario que Busco a mi mascota reciba permiso de tu cuenta' });
                break;
            case 'auth/popup-closed-by-user':
                setState({ error: 'Para acceder con facebook es necesario que Busco a mi mascota reciba permiso de tu cuenta' });
                break;
        }
    }

    function signInWithFacebook() {
        setState({ error: '' });
        signInUserWithFacebook()
        .then((user) => {
            const uid = user.user.uid;
            const userProfile = {
                name: user.user.displayName,
                email: user.user.email,
                fbToken: user.credential.accessToken,
                photo: user.user.photoURL
            };
            createUserProfile(uid, userProfile);
        })
        .catch((error) => {
            determineErrorAndShowToUser(error.code);
        });
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
                <Form onSubmit={onSubmit}>
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
                        <Button className='outlined-button mt-3 mr-2' variant='none' type='reset' onClick={resetForm}>
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
                    {error !== '' &&
                        <Alert variant='info' className='mt-3'>
                            {error}
                        </Alert>
                    }
                </Form>
                <hr className='mt-4' />
                <div className='d-flex justify-content-center'>
                    <FacebookLoginButton className='mt-2' onClick={signInWithFacebook} />
                </div>
            </Container>
        </>
    );
}

export default Signin;