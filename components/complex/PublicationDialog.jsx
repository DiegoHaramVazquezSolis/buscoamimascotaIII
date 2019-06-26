import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Body1 from '../styled/Body/Body1';
import TextForButtons from '../styled/TextForButtons';
import H4Styled from '../styled/Headline/H4Styled';
import Body2 from '../styled/Body/Body2';
import CheckBoxField from '../simple/CheckBoxField';
import Map from './Map';
import ModalBody from 'react-bootstrap/ModalBody';
import CustomDialog from '../simple/Modal/CustomDialog';

const PublicationDialog = ({ name, description, image, lastSeen, haveId, place, sex, specie, LatLng, show, mascotaId, onContactarClick, close }) => {
    if (show) {
        history.pushState(null, '', `/mascotas/perdidas/${specie}/${name}/${mascotaId}`);
    }
    return (
        <>
            {show &&
                <Head>
                    <title>Ayudanos a encontrar a {name}</title>
                </Head>
            }
            <CustomDialog show={show} size='xl' centered onHide={close} title='Mascota perdida'>
                {show &&
                <ModalBody className='mb-4'>
                    <Row>
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
                                    <Button className='raised-button' variant='none' onClick={onContactarClick}>
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
                            <CheckBoxField  className='mt-2 mb-0' disabled checked={haveId} label='Tiene placa de identificación' />
                            <div className='ml-2'>
                                {show &&
                                <Map label='Zona de la desaparición'
                                    draggable={false}
                                    instructions={`Zona donde desaparecio ${name}`}
                                    initialPosition={{ latitude: LatLng.latitude, longitude: LatLng.longitude }} />
                                }
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
                }
            </CustomDialog>
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

export default PublicationDialog;