import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import PublicationCard from '../../components/complex/PublicationCard';
import NavBar from '../../components/complex/NavBar';
import H4Styled from '../../components/styled/Headline/H4Styled';
import Subtitle1 from '../../components/styled/Subtitle/Subtitle1';
import InputField from '../../components/simple/InputField';
import Body2 from '../../components/styled/Body/Body2';
import { getUserLocationBasedOnTheirIP } from '../../utilities';
import { getPerdidasPlaces, loadMascotasPerdidasOnce } from '../../firebase/database';
import ContactModal from '../../components/complex/ContactModal';
import PublicationDialog from '../../components/complex/PublicationDialog';

const Perdidas = ({ pathname, user }) => {
    const [ showPublicationDialog, setShowPublicationDialog ] = useState(false);
    const [ showContact, setShowContact ] = useState(false);
    const [ selectedMascotaId, setSelectedMascotaId ] = useState('');
    const [ mascotasList, setMascotasList ] = useState({});
    const [ placesList, setPlacesList ] = useState({});
    const [ query, setQuery ] = useState('');
    useEffect(() => {
        getPerdidasPlaces().then((places) => setPlacesList(places.val()));
        getUserLocationBasedOnTheirIP().then((response) => {
            setQuery(`${response.data.city}, ${response.data.region_name}, ${response.data.country_name}`);
            defineMascotasList(`${response.data.city}, ${response.data.region_name}, ${response.data.country_name}`);
        });
    }, []);
    async function defineMascotasList(place) {
        setMascotasList(await loadMascotasPerdidasOnce(place)
        .then((mascotasPerdidas) => (mascotasPerdidas.val()), ({error}) => {
            if (error) {
                console.log(error);
            }
            return {};
        }));
    }
    return (
        <>
            <Head>
                <title>Mascotas perdidas | Busco a mi mascota</title>
            </Head>
            <NavBar pathname={pathname} user={user} />
            <Container className='mb-4'>
                <H4Styled>Mascotas perdidas</H4Styled>
                <Subtitle1 className='text-muted'>
                    Para filtrar por una zona especifica escribela, comenzando por la ciudad en el siguiente campo
                </Subtitle1>
                <Form.Label>
                    Filtrar por zona (Ciudad, Estado, Pais)
                    <OverlayTrigger
                            key={'placement'}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`tooltip`}>
                                    <Body2>
                                        Los resultados muestran los reportes en la ciudad que selecciones
                                    </Body2>
                                </Tooltip>}>
                                <i className='ml-1 fas fa-question'></i>
                    </OverlayTrigger>
                </Form.Label>
                <InputField list='places'
                    placeholder='Zona de busqueda'
                    value={query}
                    name='Query'
                    onChange={(e) => {setQuery(e.target.value); defineMascotasList(placesList[e.target.value] || '');}} />
                <datalist id='places'>
                    {Object.keys(placesList).map((placeKey, index) => (
                        <option value={placesList[placeKey]} key={`place-${index}`} />
                    ))}
                </datalist>
                <Row>
                    {mascotasList && Object.keys(mascotasList).map((mascotaPerdidaKey, index) => (
                        <Col sm='12' md='6' xl='4' key={`MascotaPerdida-${index}`}>
                            <PublicationCard description={mascotasList[mascotaPerdidaKey].description}
                                image={mascotasList[mascotaPerdidaKey].image || ''}
                                name={mascotasList[mascotaPerdidaKey].name}
                                date={mascotasList[mascotaPerdidaKey].lastSeen}
                                onVerMasClick={() => {setSelectedMascotaId(mascotaPerdidaKey);setShowPublicationDialog(true)}}
                                onContactarClick={() => {setSelectedMascotaId(mascotaPerdidaKey);setShowContact(true)}} />
                        </Col>
                    ))}
                    {mascotasList[selectedMascotaId] &&
                    <ContactModal show={showContact}
                        contact={mascotasList[selectedMascotaId].contact}
                        close={() => setShowContact(false)}
                        mascotaId={selectedMascotaId} />
                    }
                </Row>
            </Container>
            <PublicationDialog show={showPublicationDialog}
                onContactarClick={() => setShowContact(true)}
                close={() => setShowPublicationDialog(false)}
                {...mascotasList[selectedMascotaId]} />
        </>
    );
}

export default Perdidas;