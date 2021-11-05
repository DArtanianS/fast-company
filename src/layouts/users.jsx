import React from 'react'
import {useParams} from 'react-router-dom'
import UserPage from '../components/pages/userPage'
import UsersListPage from '../components/pages/userListPage'

const Users = () => {
    const params = useParams()
    const { userId } = params
    return <>{userId ? <UserPage userId={userId}/> : <UsersListPage/>}</>

}

export default Users;