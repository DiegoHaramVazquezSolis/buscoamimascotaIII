import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getMascotaPerdida } from '../../../firebase/database';
import Map from '../../../components/complex/Map';
import CheckBoxField from '../../../components/simple/CheckBoxField';
import Body1 from '../../../components/styled/Body/Body1';
import TextForButtons from '../../../components/styled/TextForButtons';
import Body2 from '../../../components/styled/Body/Body2';
import H4Styled from '../../../components/styled/Headline/H4Styled';
import NavBar from '../../../components/complex/NavBar';
import ContactModal from '../../../components/complex/ContactModal';

const Publicacion = ({ user, mascota, mascotaId }) => {
    const { image, lastSeen, name, specie, sex, place, description, haveId, LatLng, contact } = mascota;
    const [ showContact, setShowContact] = useState(false);
    return (
        <>
            <Head>
                <title>Ayudanos a encontrar a {name}</title>
            </Head>
            <NavBar pathname='/mascotas/perdidas' user={user} />
            <Container className='mt-5'>
                <Row className='mt-5'>
                    <Col sm='12' md='4'>
                        <div className='mascota-image'
                            style={{ 
                                width: '100%',
                                height: '300px',
                                background: `url(${image})`
                            }}></div>
                        <div className='d-flex justify-content-center mt-3'>
                            <Body1>Visto por ultima vez: {lastSeen}</Body1>
                        </div>
                            <ButtonToolbar className='d-flex justify-content-center mt-3'>
                                <Button className='raised-button' variant='none' onClick={() => setShowContact(true)}>
                                    <TextForButtons>Contactar</TextForButtons>
                                </Button>
                            </ButtonToolbar>
                    </Col>
                    <Col sm='12' md='8'>
                        <H4Styled className='mb-0'>{name}</H4Styled>
                        <Row>
                            <Col sm='12' md='6'>
                                <Body2 className='text-muted'>
                                    Especie: {specie} Sexo: {sex}
                                </Body2>
                            </Col>
                            <Col sm='12' md='6'>
                                <Body2 className='text-muted'>
                                    {place}
                                </Body2>
                            </Col>
                        </Row>
                        <Body1>
                            {description}
                        </Body1>
                        <CheckBoxField className='mt-2 mb-0' disabled checked={haveId} label='Tiene placa de identificación' />
                        <div className='ml-2'>
                            <Map label='Zona de la desaparición'
                                draggable={false}
                                instructions={`Zona donde desaparecio ${name}`}
                                initialPosition={{ latitude: LatLng.latitude, longitude: LatLng.longitude }} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <ContactModal show={showContact}
                contact={contact}
                close={() => setShowContact(false)}
                mascotaId={mascotaId} />
            <style jsx>{`
                .mascota-image {
                    background-size: cover !important;
                    background-color: #C4C4C4 !important;
                    border-radius: 4px 4px 0 0;
                    background-color: rgb(196, 196, 196);
                }
            `}</style>
        </>
    );
}

Publicacion.getInitialProps = async ({ query }) => {
    return {
        mascota: await getMascotaPerdida(query.mascotaId).then((mascotaPerdida) => mascotaPerdida),
        mascotaId: query.mascotaId
    };
}

export default Publicacion;