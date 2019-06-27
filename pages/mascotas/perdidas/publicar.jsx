import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import { useState, useReducer } from 'react';
import NavBar from '../../../components/complex/NavBar';
import H4Styled from '../../../components/styled/Headline/H4Styled';
import Subtitle1 from '../../../components/styled/Subtitle/Subtitle1';
import Body1 from '../../../components/styled/Body/Body1';
import TextForButtons from '../../../components/styled/TextForButtons';
import InputField from '../../../components/simple/InputField';
import RadioButtonField from '../../../components/simple/RadioButtonField';
import SelectField from '../../../components/simple/SelectField';
import TextAreaField from '../../../components/simple/TextAreaField';
import DropZoneWithPreview from '../../../components/simple/DropZoneWithPreview';
import H5Styled from '../../../components/styled/Headline/H5Styled';
import Map from '../../../components/complex/Map';
import Body2 from '../../../components/styled/Body/Body2';
import CheckBoxField from '../../../components/simple/CheckBoxField';
import List from '../../../components/simple/List/List';
import ListItem from '../../../components/simple/List/ListItem';
import { primaryColorRGB } from '../../../components/styled/Constants';
import { publishMascotaPerdida, savePlaceOfPerdidaOnDatabase, updateMascotaPerdida } from '../../../firebase/database';
import { uploadFileByReference, getDownloadURLByReference } from '../../../firebase/storage';

const InformationSectionTitle = ({ children }) => (
    <Row>
        <Col xs='12' className='mt-2'>
            <H5Styled>
                {children}
            </H5Styled>
        </Col>
    </Row>
);

const FieldLabel = ({ children }) => (
    <Form.Label>
        <Body1 className='mb-0'>
            {children}
        </Body1>
    </Form.Label>
);

const TextContactButton = ({ children, style, onClick }) => (
    <Button className='text-button pt-0 pb-0 mr-1 ml-1 mt-2'
        variant='none'
        style={style}
        onClick={onClick}>
        {children}
    </Button>
);

const Publicar = ({ pathname, user }) => {
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
                type: null,
                content: null,
                lock: true
            }
        ]
    };

    function reducer(prevState, state) {
        return {...prevState, ...state};
    }

    const [{name, specie, sex, description, location, lastSeen, haveId, contact}, setState] = useReducer(reducer, state);

    const [files, setFiles] = useState([]);
    function removeImages() {
        const deleteImage = confirm('Deseas quitar las imagenes?');
        if (deleteImage) {
            setFiles([]);
        }
    }

    function onChange(e) {
        setState({ [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (files.length > 0) {
            if (location.LatLng.latitude === 0 && location.LatLng.longitude === 0) {
                alert('Selecciona la ubicacion donde desaparecio tu mascota o una ubicacion aproximada en el mapa');
                return;
            }
            var contactObject = {};
            contact.map((contactNode, index) => {
                contactObject[index] = contactNode;
                contactObject[index].lock = null;
            });
            publishMascotaPerdida({ name, specie, sex, description, place: location.place, LatLng: location.LatLng, cp: location.cp, lastSeen, haveId, contact: contactObject, owner: user.uid })
            .then((insertedData) => {
                savePlaceOfPerdidaOnDatabase(location.place);
                const storageRef = `/Perdidas/${name}-${insertedData.key}`;
                uploadFileByReference(storageRef, files[0])
                .on('state_changed', (snapshot) => {
                    //Mientras la imagen se publica
                }, (error) => {
                    alert('Hubo un error mientras se guardaba la imagen');
                    console.error(error);
                }, () => {
                    getDownloadURLByReference(storageRef).then((url) => {
                        updateMascotaPerdida(insertedData.key, { image: url });
                    });
                });
            });
        } else {
            alert('Es necesario que agregues una imagen de tu mascota');
            return;
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
                <Form onSubmit={onSubmit}>
                    <InformationSectionTitle>
                        Información sobre tu mascota
                    </InformationSectionTitle>
                    <Row className='ml-1'>
                        <Col sm='12' md='4' className='mt-2'>
                            <FieldLabel>
                                Nombre de tu mascota
                            </FieldLabel>
                            <InputField placeholder='Nombre de tu mascota'
                                className='family-open-sans'
                                name='name'
                                value={name}
                                onChange={onChange} />
                        </Col>
                        <Col sm='12' md='4' className='mt-2'>
                            <FieldLabel>
                                Especie
                            </FieldLabel>
                            <SelectField className='family-open-sans' name='specie' value={specie} onChange={onChange}>
                                <option className='family-open-sans' value='Perro'>Perro</option>
                                <option className='family-open-sans' value='Gato'>Gato</option>
                                <option className='family-open-sans' value='Otro'>Otro</option>
                            </SelectField>
                        </Col>
                        <Col sm='12' md='4' className='mt-2'>
                            <div className='d-block'>
                                <FieldLabel>
                                    Sexo
                                </FieldLabel>
                            </div>
                            <div className='form-check-inline'>
                                <RadioButtonField name='hembra' label='Hembra' checked={sex === 'Hembra'} onChange={() => setState({ sex: 'Hembra' })} />
                                <RadioButtonField name='macho' label='Macho' checked={sex === 'Macho'} onChange={() => setState({ sex: 'Macho' })} />
                            </div>
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <FieldLabel>
                                Descripción
                            </FieldLabel>
                            <TextAreaField placeholder='Descripción de tu mascota'
                                rows='6'
                                name='description'
                                value={description}
                                onChange={onChange} />
                        </Col>
                        <Col sm='12' md='6' className='mt-2'>
                            <FieldLabel>
                                Imagen de tu mascota
                            </FieldLabel>
                            <DropZoneWithPreview files={files}
                                removeImages={removeImages}
                                setFiles={setFiles} />
                        </Col>
                    </Row>
                    <InformationSectionTitle>
                        Información sobre la desaparición
                    </InformationSectionTitle>
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
                            <FieldLabel>
                                Fecha de la desaparición
                            </FieldLabel>
                            <InputField placeholder='Fecha de la desaparición'
                                type='date'
                                className='family-open-sans'
                                name='lastSeen'
                                value={lastSeen}
                                onChange={onChange} />
                        </Col>
                        <Col sm='12' md='6' className='mt-5 mb-3'>
                            <CheckBoxField
                                label='Tiene placa de identificación'
                                name='haveId'
                                onChange={() => setState({ haveId: !haveId })}
                                checked={haveId} />
                        </Col>
                    </Row>
                    <InformationSectionTitle>
                        Información de contacto
                    </InformationSectionTitle>
                    <Row className='ml-1'>
                        <Col xs='10'>
                            <List>
                                {contact.map((contactNode, index) => (
                                    <ListItem>
                                        <Row>
                                            <Col xs='12'>
                                                <FieldLabel>
                                                    Selecciona el medio de contacto
                                                </FieldLabel>
                                            </Col>
                                            <Col className='d-flex justify-content-center mb-2 mt-2' sm={12} md={5}>
                                                <TextContactButton style={{ backgroundColor: contactNode.type==='whatsapp' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'whatsapp'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: '#25D366' }} className={`fab m-2 fa-lg fa-whatsapp whatsapp-${index}`}></i>
                                                </TextContactButton>
                                                <TextContactButton style={{ backgroundColor: contactNode.type==='mobile' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'mobile'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: 'black' }} className={`fas m-2 fa-lg fa-mobile mobile-${index}`}></i>
                                                </TextContactButton>
                                                <TextContactButton style={{ backgroundColor: contactNode.type==='phone' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'phone'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: '#32C8f4' }} className={`fas m-2 fa-lg fa-phone phone-${index}`}></i>
                                                </TextContactButton>
                                                <TextContactButton style={{ backgroundColor: contactNode.type==='envelope' && `rgba(${primaryColorRGB}, .3)` }}
                                                    onClick={() => {var contactCopy = contact; contactCopy[index].type = 'envelope'; contactCopy[index].lock = false; setState({ contact: contactCopy });}}>
                                                    <i style={{ color: 'black' }} className={`fas m-2 fa-lg fa-envelope envelope-${index}`}></i>
                                                </TextContactButton>
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
                                        onClick={() => { var contactCopy = contact; contactCopy.push({type: null, content: null, lock: true}); setState({ contact: contactCopy }); }}>
                                        <TextForButtons>Agregar otro</TextForButtons>
                                    </Button>
                                </ListItem>
                            </List>
                        </Col>
                        <Col xl='12' className='mt-2 d-flex justify-content-end mb-3'>
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