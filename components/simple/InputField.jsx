import PropTypes from 'prop-types';

const InputField = ({ name, value, type, placeholder, className, onChange }) => (
    <input id={name}
        type={type}
        placeholder={placeholder}
        className={`form-control ${className ? className : ''}`}
        name={name}
        value={value}
        onChange={onChange} />
);

InputField.defaultProps = {
    type: 'text'
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
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default InputField;