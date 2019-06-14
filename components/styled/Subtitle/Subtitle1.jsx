import PropTypes from 'prop-types';

const Subtitle1 = ({ children, className }) => {
    return (
        <>
            <p className={className ? className : ''}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 16px;
                    letter-spacing: 0.15px;
                }
            `}</style>
        </>
    );
};


Subtitle1.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default Subtitle1;
