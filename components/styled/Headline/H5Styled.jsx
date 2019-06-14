import PropTypes from 'prop-types';

const H5Styled = ({ children, className }) => {
    return (
        <>
            <h5 className={className ? className : ''}>{children}</h5>
            <style jsx>{`
                h5 {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                }
            `}</style>
        </>
    );
};


H5Styled.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default H5Styled;
