import PropTypes from 'prop-types'

function Row({ gap, children }) {
    if (!gap) { gap = 0}
    return (
        <div className={`row${gap ? ` gap-${gap}` : ""}`}>
            {children}
        </div>
    )
}

export default Row

Row.propTypes = {
    gap: PropTypes.number
}