import React, { useState } from 'react'
import { fetchAll } from './API/fake.api/user.api'
import Users from './components/users'

function App() {
    const [users, setUsers] = useState(fetchAll())


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
            <Users
                users={users}
                handleDelete={handleDelete}
                handleBookmark={handleToggleBookMark}
            />
        </>
    )
}

export default App
