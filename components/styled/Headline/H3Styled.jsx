import PropTypes from 'prop-types';

const H3Styled = ({ children, className }) => {
    return (
        <>
            <h3 className={className ? className : ''}>{children}</h3>
            <style jsx>{`
                h3 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: normal;
                    font-size: 46px;
                }
            `}</style>
        </>
    );
};


H3Styled.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default H3Styled;