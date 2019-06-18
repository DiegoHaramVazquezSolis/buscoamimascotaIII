import PropTypes from 'prop-types';

const TextAreaField = ({ name, className, placeholder, onChange, value, disabled, rows }) => {
    return (
        <>
            <textarea
                id={name}
                name={name}
                className={`form-control ${className ? className : ''}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled}
                rows={rows} />
        </>
    );
}

TextAreaField.defaultProps = {
    disabled: false
};

TextAreaField.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default TextAreaField;
