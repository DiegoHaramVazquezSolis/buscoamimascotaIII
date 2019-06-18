import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/complex/NavBar';
import H4Styled from '../../components/styled/Headline/H4Styled';
import Subtitle1 from '../../components/styled/Subtitle/Subtitle1';
import Body1 from '../../components/styled/Body/Body1';
import TextForButtons from '../../components/styled/TextForButtons';
import InputField from '../../components/simple/InputField';
import RadioButtonField from '../../components/simple/RadioButtonField';
import SelectField from '../../components/simple/SelectField';
import TextAreaField from '../../components/simple/TextAreaField';
import DropZoneWithPreview from '../../components/simple/DropZoneWithPreview';
import { useState, useReducer } from 'react';
import H5Styled from '../../components/styled/Headline/H5Styled';
import Map from '../../components/complex/Map';
import Body2 from '../../components/styled/Body/Body2';
import CheckBoxField from '../../components/simple/CheckBoxField';
import List from '../../components/simple/List/List';
import ListItem from '../../components/simple/List/ListItem';
import { primaryColorRGB } from '../../components/styled/Constants';

const Publicar = ({ pathname }) => {
    const state = {
        name: '',
        specie: '',
        sex: 'Hembra',
        description: '',
        location: {cp: '44200', place: 'Guadalajara, Jalisco, Mexico', LatLng: { latitude: 0, longitude: 0 }},
        lastSeen: '',
        haveId: false,
        contact: [
            {
                type: '',
                content: '',
                lock: true
            }
        ]
    };

    function reducer(prevState, state) {
        return {...prevState, ...state};
    }

    const [{name, specie, sex, description, location, lastSeen, haveId, contact}, setState] = useReducer(reducer, state)

    const [files, setFiles] = useState([]);
    function removeImages() {
        const deleteImage = confirm('Deseas quitar las imagenes?');
        if (deleteImage) {
            setFiles([]);
        }
    }
    return (
        <>
            <Head>
                <title>Publicar mascota perdida</title>
            </Head>
            <NavBar pathname={pathname} />
            <Container>
                <H4Styled>Publicar mascota perdida</H4Styled>
                <Subtitle1 className='text-muted mb-1'>
                    Para publicar a tu mascota desaparecida llena el siguiente formulario.
                </Subtitle1>
                <Form>
                    <Row>
                        <Col xs='12' className='mt-2'>
                            <H5Styled>
                                Información sobre tu mascota
                            </H5Styled>
                        </Col>
                    </Row>
                    <Row className='ml-1'>
                        <Col sm='12' md='4' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Nombre de tu mascota
                                </Body1>
                            </Form.Label>
                            <InputField placeholder='Nombre de tu mascota'
                                className='family-open-sans' />
                        </Col>
                        <Col sm='12' md='4' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Especie
                                </Body1>
                            </Form.Label>
                            <SelectField className='family-open-sans'>
                                <option className='family-open-sans' value='Perro'>Perro</option>
                                <option className='family-open-sans' value='Gato'>Gato</option>
                                <option className='family-open-sans' value='Otro'>Otro</option>
                            </SelectField>
                        </Col>
                        <Col sm='12' md='4' className='mt-2'>
                            <Form.Label className='d-block'>
                                <Body1 className='mb-0'>
                                    Sexo
                                </Body1>
                            </Form.Label>
                            <div className='form-check-inline'>
                                <RadioButtonField label='Hembra' checked />
                                <RadioButtonField label='Macho' />
                            </div>
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <Form.Label className='d-block'>
                                <Body1 className='mb-0'>
                                    Descripción
                                </Body1>
                            </Form.Label>
                            <TextAreaField placeholder='Descripción de tu mascota'
                                rows='6' />
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Imagen de tu mascota
                                </Body1>
                            </Form.Label>
                            <DropZoneWithPreview files={files}
                                removeImages={removeImages}
                                setFiles={setFiles} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' className='mt-2'>
                            <H5Styled>
                                Información sobre la desaparición
                            </H5Styled>
                        </Col>
                    </Row>
                    <Row className='ml-1'>
                        <Col xs='12' className='mt-2'>
                            <Map
                                label={
                                    <>
                                        Lugar de desaparición
                                        <OverlayTrigger
                                            key={'placement'}
                                            placement={'bottom'}
                                            overlay={
                                                <Tooltip id={`tooltip`}>
                                                    <Body2>
                                                        La ubicación sirve para notificar a los usuarios que esten 5km a la redonda.
                                                    </Body2>
                                                </Tooltip>
                                            }>
                                            <i className='far fa-question-circle fa-lg ml-1'></i>
                                        </OverlayTrigger>
                                        <br/>
                                        <Body2 style={{ color: '#828282' }}>
                                            Lugar: {location.place}
                                            <br/>
                                            Codigo Postal: {location.cp}
                                        </Body2>
                                    </>
                                }
                                instructions={
                                    <>
                                        Arrastra el marcador <i style={{ color: '#D00' }} className='fas fa-map-marker fa-lg'></i> para determinar la ubicación.
                                        <br/>
                                        Presiona <img src='/static/media/baseline-gps_fixed-24px.svg' /> para colocar el marcador en tu ubicación actual.
                                    </>
                                }
                                onPointSelected={(cp, place, LatLng) => setState({ location: {cp, place, LatLng} })}/>
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <Form.Label>
                                <Body1 className='mb-0'>
                                    Fecha de la desaparición
                                </Body1>
                            </Form.Label>
                            <InputField placeholder='Fecha de la desaparición'
                                type='date'
                                className='family-open-sans' />
                        </Col>
                        <Col sm='12' md='6' className='mt-5 mb-3'>
                            <CheckBoxField
                                label='Tiene placa de identificación'
                                name='haveId'
                                onChange={() => setState({ haveId: !haveId })}
                                checked={haveId} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' className='mt-2'>
                            <H5Styled>
                                Información de contacto
                            </H5Styled>
                        </Col>
                    </Row>
                    <Row className='ml-1'>
                        <Col xs='10'>
                            <List>
                                {contact.map((contactNode, index) => (
                                    <ListItem>
                                        <Row>
                                            <Col xs='12'>
                                                <Body1>Selecciona el medio de contacto</Body1>
                                            </Col>
                                            <Col className='d-flex justify-content-center mb-2 mt-2' sm={12} md={5}>
                                                <Button className='text-button pt-0 pb-0 mr-1 ml-1 mt-2'
                                                    variant='none'
                                                    style={{ backgroundColor: contactNode.type==='whatsapp' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'whatsapp'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: '#25D366' }}className={`fab m-2 fa-lg fa-whatsapp whatsapp-${index}`}></i>
                                                </Button>
                                                <Button className='text-button pt-0 pb-0 mr-1 ml-1 mt-2'
                                                    variant='none'
                                                    style={{ backgroundColor: contactNode.type==='mobile' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'mobile'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: 'black' }} className={`fas m-2 fa-lg fa-mobile mobile-${index}`}></i>
                                                </Button>
                                                <Button className='text-button pt-0 pb-0 mr-1 ml-1 mt-2'
                                                    variant='none'
                                                    style={{ backgroundColor: contactNode.type==='phone' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'phone'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: '#32C8f4' }} className={`fas m-2 fa-lg fa-phone phone-${index}`}></i>
                                                </Button>
                                                <Button className='text-button pt-0 pb-0 mr-1 ml-1 mt-2'
                                                    variant='none'
                                                    style={{ backgroundColor: contactNode.type==='envelope' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'envelope'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: 'black' }} className={`fas m-2 fa-lg fa-envelope envelope-${index}`}></i>
                                                </Button>
                                            </Col>
                                            <Col sm={12} md={7}>
                                                {contactNode.type === 'envelope' ?
                                                <InputField disabled={contactNode.lock}
                                                    type='email'
                                                    name={`contact-${index}`}
                                                    value={contactNode.content}
                                                    placeholder='Direccion de correo electronico'
                                                    className='family-open-sans mt-3'
                                                    required={false}
                                                    onChange={(e) => {var contactCopy = contact; contactCopy[index].content = e.target.value; setState({ contact: contactCopy });}} />
                                                :
                                                <InputField disabled={contactNode.lock}
                                                    type='phone'
                                                    name={`contact-${index}`}
                                                    value={contactNode.content}
                                                    placeholder='Numero de telefono'
                                                    className='family-open-sans mt-3'
                                                    required={false}
                                                    onChange={(e) => {var contactCopy = contact; contactCopy[index].content = e.target.value; setState({ contact: contactCopy });}} />
                                                }
                                            </Col>
                                        </Row>
                                    </ListItem>
                                ))}
                                <ListItem>
                                    <Button className='outlined-button mt-2 pt-0 pb-0'
                                        onClick={() => { var contactCopy = contact; contactCopy.push({type: '', content: '', lock: true}); setState({ contact: contactCopy }); }}>
                                        <TextForButtons>Agregar otro</TextForButtons>
                                    </Button>
                                </ListItem>
                            </List>
                        </Col>
                        <Col xl={12} className='mt-2 d-flex justify-content-end mb-3'>
                            <Button className='raised-button'
                                variant='none'
                                type='submit'>
                                    <TextForButtons>Publicar a mi mascota!</TextForButtons>
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default Publicar;