import PropTypes from 'prop-types';

const H1Styled = ({ children, className }) => {
    return (
        <>
            <h1 className={className ? className : ''}>{children}</h1>
            <style jsx>{`
                h1 {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    font-size: 96px;
                    letter-spacing: -1.5px;
                }
            `}</style>
        </>
    );
};


H1Styled.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default H1Styled;