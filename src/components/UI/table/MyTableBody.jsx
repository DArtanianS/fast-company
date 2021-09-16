import React from 'react'
import User from '../../user'
import PropTypes from 'prop-types'

const MyTableBody = ({ users, handleDelete, handleBookmark }) => {
    return (
        <>
            {users.map((item) => (
                <User
                    key={item._id}
                    item={item}
                    handleDelete={handleDelete}
                    handleBookmark={handleBookmark}
                />
            ))}
        </>
    )
}

MyTableBody.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default MyTableBody
