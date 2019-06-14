import PropTypes from 'prop-types';

const Body1 = ({ children, className }) => {
    return (
        <>
            <p className={className ? className : ''}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    letter-spacing: 0.444444px;
                }
            `}</style>
        </>
    );
};


Body1.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default Body1;
