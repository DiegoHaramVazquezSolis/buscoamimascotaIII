import PropTypes from 'prop-types';

const InputField = ({ name, value, type, placeholder, required, className, disabled, onChange }) => (
    <input id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`form-control ${className ? className : ''}`}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange} />
);

InputField.defaultProps = {
    type: 'text',
    required: true,
    disabled: false
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    type: PropTypes.oneOf([
        'text',
        'number',
        'date',
        'password',
        'email',
        'tel'
    ]).isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default InputField;