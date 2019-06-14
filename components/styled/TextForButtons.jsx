import PropTypes from 'prop-types';

const TextForButtons = ({ children, className }) => {
    return (
        <>
            <p className={className ? className : ''}>{children}</p>
            <style jsx>{`
                p {
                    padding-top: 8px;
                    padding-bottom: 8px;
                    margin-bottom: 0;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    letter-spacing: 1.25px;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    );
};


TextForButtons.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default TextForButtons;
