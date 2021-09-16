import React from 'react'
import MyTableBody from './UI/table/MyTableBody'
import MyTableThead from './UI/table/MyTableThead'
import PropTypes from 'prop-types'

const Users = ({ users, handleDelete, handleBookmark }) => {
    return (
        <>
            {users.length > 0 ? (
                <table key="Table12" className="table">
                    <MyTableThead />
                    <MyTableBody
                        users={users}
                        handleDelete={handleDelete}
                        handleBookmark={handleBookmark}
                    />
                </table>
            ) : (
                ''
            )}
        </>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Users
