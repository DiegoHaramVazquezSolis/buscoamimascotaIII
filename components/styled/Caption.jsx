import PropTypes from 'prop-types';

const Caption = ({ children, className }) => {
    return (
        <>
            <small className={className ? className : ''}>{children}</small>
            <style jsx>{`
                small {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 12px;
                    letter-spacing: 0.4px;
                }
            `}</style>
        </>
    );
}

Caption.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Caption;
