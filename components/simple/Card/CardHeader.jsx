import PropTypes from 'prop-types';
import H5Styled from '../../styled/Headline/H5Styled';

const CardHeader = ({ children }) => {
    return (
        <>
            <div>
                <H5Styled className='ml-2 mt-2 mb-2'>{children}</H5Styled>
            </div>
            <style jsx>{`
                
            `}</style>
        </>
    );
}
CardHeader.propTypes = {
    children: PropTypes.string.isRequired
};
export default CardHeader;