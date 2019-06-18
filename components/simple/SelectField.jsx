import PropTypes from 'prop-types';

const SelectField = ({ name, className, onChange, value, disabled, children, required }) => {
    return (
        <>
            <select
                id={name}
                name={name}
                type='select'
                onChange={onChange}
                value={value}
                className={`form-control ${className ? className : ''}`}
                disabled={disabled}
                required={required}>
                    {children}
            </select>
        </>
    );
}

SelectField.defaultProps = {
    disabled: false,
    required: true
};

SelectField.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default SelectField;
