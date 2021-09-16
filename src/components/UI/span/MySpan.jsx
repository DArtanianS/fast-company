import React from 'react'
import PropTypes from 'prop-types'

const MySpan = ({ myKey, colorTopBage, textTopSpan }) => {
    const classSpan = `p-2 m-2 badge bg-${colorTopBage}`
    return (
        <span key={myKey} className={classSpan}>
            {textTopSpan}
        </span>
    )
}

MySpan.propTypes = {
    myKey: PropTypes.string.isRequired,
    colorTopBage: PropTypes.string.isRequired,
    textTopSpan: PropTypes.string
}

export default MySpan
