import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/complex/NavBar';
import UserPublicationCard from '../../components/complex/UserPublicationCard';
import H4Styled from '../../components/styled/Headline/H4Styled';
import Subtitle1 from '../../components/styled/Subtitle/Subtitle1';

const Publicaciones = ({ user }) => {
    if (user == null) {
        return ( <h1>Cargando</h1> );
    }
    return (
        <>
            <Head>
                <title>Mis publicaciones | {user.displayName}</title>
            </Head>
            <NavBar user={user} />
            <Container className='overflow-hidden'>
                <H4Styled>Mis publicaciones</H4Styled>
                <Subtitle1 className='text-muted'>
                    Aqui puedes ver, modificar, o eliminar las publicaciones que haz realizado.
                </Subtitle1>
                <Row>
                    <Col xs='12' sm='6' md='4'>
                        <UserPublicationCard description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec enim mauris. Morbi imperdiet, felis eget facilisis molestie, nulla arcu posuere turpis, cursus semper neque sapien quis elit. Donec urna dolor, dignissim id accumsan iaculis, ullamcorper in elit. Morbi quis sapien scelerisque, dictum enim non, finibus risus. Proin a sagittis tortor. Vivamus vitae eleifend purus. Phasellus semper orci non quam accumsan convallis eu a ex. Etiam nec eros mattis, volutpat nisl id, malesuada urna. Proin fermentum est ut commodo consequat.'
                            image='https://firebasestorage.googleapis.com/v0/b/busco-a-mi-mascota-236922.appspot.com/o/Perdidas%2FKenji--LgbVgz5ZYGf-oUQrYL4?alt=media&token=014e038c-84f6-4640-8b90-a19eaf74e81a'
                            name='Kenji'
                            date='19-06-2019' />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Publicaciones;