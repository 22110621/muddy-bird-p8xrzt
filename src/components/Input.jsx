import PropTypes from 'prop-types';

function Input({ type, max, value, className, disabled }) {
    switch (type) {
        case "progress":
            type = "range"
            break;
            
        default:
            break;
    }
    return (
        <input type={type} max={max} value={value} className={className} disabled={disabled} />
    )
}

export default Input

Input.propTypes = {
    type: PropTypes.oneOf(["progress"]),
    max: PropTypes.number,
    value: PropTypes.number,
    className: PropTypes.string,
    disabled: PropTypes.bool
}