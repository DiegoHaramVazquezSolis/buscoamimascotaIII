import PropTypes from 'prop-types';

const H6Styled = ({ children, className }) => {
    return (
        <>
            <h6 className={className ? className : ''}>{children}</h6>
            <style jsx>{`
                h6 {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 20px;
                    letter-spacing: 0.15px;
                }
            `}</style>
        </>
    );
};


H6Styled.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string
};


export default H6Styled;
