import PropTypes from 'prop-types';

const InputField = ({ name, value, type, placeholder, required, className, onChange }) => (
    <input id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`form-control ${className ? className : ''}`}
        name={name}
        value={value}
        onChange={onChange} />
);

InputField.defaultProps = {
    type: 'text',
    required: true
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
    onChange: PropTypes.func.isRequired
};

export default InputField;