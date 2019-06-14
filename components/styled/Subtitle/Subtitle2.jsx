import PropTypes from 'prop-types';

const Subtitle2 = ({ children, className }) => {
    return (
        <>
            <p className={className ? className : ''}>{children}</p>
            <style jsx>{`
                p {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.1px;
                }
            `}</style>
        </>
    );
};


Subtitle2.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default Subtitle2;
