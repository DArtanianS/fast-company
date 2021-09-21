import React, { useState, useEffect } from 'react'
import  api  from './API/fake.api/user.api'
import Users from './components/users'

function App() {
    const [users, setUsers] = useState()

    useEffect(() => {
        api.fetchAll().then(data => setUsers(data))
    },[])

    const handleDelete = (userId) => {
        return setUsers([...users].filter((user) => user._id !== userId))
    }

    const handleToggleBookMark = (id) => {
        return setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark
                }
                return user
            })
        )
    }

    return (
        <>
            {users &&
                <Users
                    users={users}
                    handleDelete={handleDelete}
                    handleBookmark={handleToggleBookMark}
                />
            }
        </>
    )
}

export default App
