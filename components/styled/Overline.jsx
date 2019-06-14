import PropTypes from 'prop-types';

const Overline = ({ children, className }) => {
    return (
        <>
            <small className={className ? className : ''}>{children}</small>
            <style jsx>{`
                small {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    font-size: 10px;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    );
}

Overline.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Overline;
