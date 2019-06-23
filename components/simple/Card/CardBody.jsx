import PropTypes from 'prop-types';
import Body2 from '../../styled/Body/Body2';

const CardBody = ({ children }) => {
    return (
        <>
            <Body2 className='ml-2 mr-1'>{children}</Body2>
        </>
    );
}
CardBody.propTypes = {
    children: PropTypes.string.isRequired
};
export default CardBody;