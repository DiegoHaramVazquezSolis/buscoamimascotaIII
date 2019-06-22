import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from '../simple/Modal/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import List from '../simple/List/List';
import ListItem from '../simple/List/ListItem';
import Button from 'react-bootstrap/Button';
import H5Styled from '../styled/Headline/H5Styled';

const ContactModal = ({ mascotaId, contact, centered, show, close }) => {
    var localContact = {};
    Object.assign(localContact, contact);
    return (
        <Modal size='sm' centered={centered} show={show} onHide={close}>
            <ModalHeader>Contacto</ModalHeader>
            <ModalBody>
                <List>
                    {Object.keys(localContact).length > 0 ? Object.keys(localContact).map((contactKey) => {
                        switch (localContact[contactKey].type) {
                            case 'whatsapp':
                                return (
                                    <ListItem key={`contact-${mascotaId}-${contactKey}`}>
                                        <Button className='w-100 text-button' variant='none'>
                                            <i className='fab fa-whatsapp fa-lg mr-3' style={{ color: '#25D366' }}></i>{`  ${localContact[contactKey].content}`}
                                        </Button>
                                    </ListItem>
                                );
                            case 'mobile':
                                return (
                                    <ListItem key={`contact-${mascotaId}-${contactKey}`}>
                                        <Button className='w-100 text-button' variant='none'>
                                            <i className='fas fa-mobile fa-lg mr-3'></i>{`  ${localContact[contactKey].content}`}
                                        </Button>
                                    </ListItem>
                                );
                            case 'phone':
                                return (
                                    <ListItem key={`contact-${mascotaId}-${contactKey}`}>
                                        <Button className='w-100 text-button' variant='none'>
                                            <i className='fas fa-phone fa-lg mr-3'></i>{`  ${localContact[contactKey].content}`}
                                        </Button>
                                    </ListItem>
                                );
                            case 'envelope':
                                return (
                                    <ListItem key={`contact-${mascotaId}-${contactKey}`}>
                                        <Button className='w-100 text-button' variant='none'>
                                        <i className='fas fa-envelope fa-lg mr-3'></i>{`  ${localContact[contactKey].content}`}
                                        </Button>
                                    </ListItem>
                                );
                            default:
                                return ('No hay información de contacto');
                        }
                    })
                    :
                    <H5Styled>No hay información de contacto</H5Styled>
                    }
                </List>
            </ModalBody>
        </Modal>
    );
}

ContactModal.defaultProps = {
    centered: true
};

ContactModal.propTypes = {
    contact: PropTypes.object.isRequired,
    centered: PropTypes.bool
};

export default ContactModal;