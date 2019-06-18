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
import { logInWithEmailAndPassword, signInUserWithFacebook } from '../firebase/auth';

const Login = ({ pathname }) => {
    const state = {
        email: '',
        password: '',
        error: ''
    };

    function reducer(prevState, state) {
        return { ...prevState, ...state };
    }

    const [ { email, password, error }, setState ] = useReducer(reducer, state);

    function onChange (e) {
        setState({ [e.target.name]: e.target.value });
    }

    function resetForm() {
        setState({ email: '', password: '' });
    }

    function onSubmit(e) {
        e.preventDefault();
        setState({ error: '' });
        logInWithEmailAndPassword(email, password)
        .catch((error) => {
            determineErrorAndShowToUser(error.code);
        });
    }

    function determineErrorAndShowToUser(errorCode) {
        switch(errorCode) {
            case 'auth/user-not-found':
                setState({ error: 'No existe un usuario registrado con esa direccion de correo' });
                break;
            case 'auth/invalid-email':
                setState({ error: 'La direccion de correo proporcionada no es valida' });
                break;
            case 'auth/wrong-password':
                setState({ error: 'Contraseña incorrecta' });
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
                <title>Iniciar sesión</title>
            </Head>
            <NavBar pathname={pathname} />
            <Container>
                <H4Styled>Iniciar sesión</H4Styled>
                <Subtitle1 className='text-muted mb-1'>
                    Nos encanta que nos visites de nuevo, ingresa tus datos para continuar.
                </Subtitle1>
                <Form className='align-middle' onSubmit={onSubmit} >
                    <Row>
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
                    </Row>
                    <ButtonToolbar className='d-flex justify-content-end'>
                        <Button className='outlined-button mt-3 mr-2' variant='none' type='reset' onClick={resetForm} >
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

export default Login;