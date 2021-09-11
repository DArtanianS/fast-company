import React, {useState} from 'react'
import {fetchAll} from "./API/fake.api/user.api";
import SerchStatus from "./components/serchStatus";
import Users from "./components/users";

function App() {

    const [users, setUsers] = useState(fetchAll())

    const handleDelete = (userId) => {
        return setUsers([...users].filter(user => user._id !== userId))
    }

    const handleToggleBookMark = (id) => {
        const index = users.findIndex(v => v._id === id)
        const array = [...users]
        array[index].bookmark = !array[index].bookmark
        return setUsers(array)
    }

    return (
        <>
            {console.log(users)}
            <SerchStatus usersCount = {users.length}/>
            <Users users={users} handleDelete={handleDelete} handleBookmark={handleToggleBookMark}/>
        </>
    )
}

export default App