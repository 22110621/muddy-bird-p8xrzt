import PropTypes from 'prop-types'

function Container({ m, children }) {
    if (!m) { m = 0}
    return (
        <div className={`container${m ? ( ` m-${m}`) : ("")}`}>
            {children}
        </div>
    )
}

export default Container

Container.propTypes = {
    m: PropTypes.string
}