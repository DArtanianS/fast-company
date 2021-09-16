import React from 'react'
import MyTableThead from './MyTableThead'
import Users from '../../users'
import PropTypes from 'prop-types'

const MyTable = ({ users, handleDelete }) => {
    return (
        <table key="Table12" className="table">
            <MyTableThead />
            <Users users={users} handleDelete={handleDelete} />
        </table>
    )
}

MyTable.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default MyTable
