import Card from 'react-bootstrap/Card';
import CardImage from '../simple/Card/CardImage';
import Body2 from '../styled/Body/Body2';
import CardHeader from '../simple/Card/CardHeader';
import CardBody from '../simple/Card/CardBody';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import TextForButtons from '../styled/TextForButtons';

const PublicationCard = ({ image, date, name, description, onVerMasClick, onContactarClick }) => {
    return (
        <Card className='mt-4'>
            <CardImage src={image} />
            <Body2 className='pt-2 mb-0 pl-2 text-muted'>{date}</Body2>
            <CardHeader>{name}</CardHeader>
            <div style={{ height: '110px' }}>
                <CardBody>
                    {description.length > 183 ? `${description.substring(0, 184)}...` : description}
                </CardBody>
            </div>
            <ButtonToolbar className='mt-3 ml-auto'>
                <Button className='text-button mb-3 ml-2' size='sm' variant='none' onClick={onVerMasClick}>
                    <TextForButtons>Ver mas</TextForButtons>
                </Button>
                <Button className='raised-button mb-3 ml-2' size='sm' variant='none' onClick={onContactarClick}>
                    <TextForButtons>Contactar</TextForButtons>
                </Button>
                <Button className='text-button mb-3 ml-2 mr-2' size='sm' variant='none'>
                    <i className='fas fa-share-alt fa-2x'></i>
                </Button>
            </ButtonToolbar>
        </Card>
    );
}

export default PublicationCard;