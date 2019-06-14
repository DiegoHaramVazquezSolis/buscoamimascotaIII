import PropTypes from 'prop-types';

const Body2 = ({ children, className }) => {
    return (
        <>
            <p className={className ? className : ''}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.25px;
                }
            `}</style>
        </>
    );
};


Body2.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default Body2;
