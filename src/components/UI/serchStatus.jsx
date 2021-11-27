import React from 'react'
import MySpan from './qualities'
import PropTypes from 'prop-types'
import cn from 'classnames'

const SerchStatus = ({ usersCount }) => {
    const renderPharse = (number) => {
        return number === 1 || number > 4
            ? 'человек тусанет'
            : 'человека тусанут'
    }
    const textTopSpan =
        usersCount === 0
            ? 'Никто не тусанет с тобой'
            : `${usersCount} ${renderPharse(usersCount)} с тобой сегодня`

    return (
            <MySpan
                color={cn({'primary': usersCount > 0}, {'danger': usersCount === 0})}
            >
                <h1>{textTopSpan}</h1>
            </MySpan>
    )
}

SerchStatus.propTypes = {
    usersCount: PropTypes.number.isRequired
}

export default SerchStatus
