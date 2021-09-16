import React, { useState } from 'react'
import { fetchAll } from './API/fake.api/user.api'
import SerchStatus from './components/serchStatus'
import Users from './components/users'
import MyPagination from './components/UI/pagination/MyPagination'
import { paginate } from './utils/paginate'

function App() {
    const [users, setUsers] = useState(fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const count = users.length
    const pageSize = 4

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

    const handlePageChange = (pageIndex) => {
        console.log('pageIndex', pageIndex)
        setCurrentPage(pageIndex)
    }

    const userCropt = paginate(users, currentPage, pageSize)

    return (
        <>
            <SerchStatus usersCount={count} />
            <Users
                users={userCropt}
                handleDelete={handleDelete}
                handleBookmark={handleToggleBookMark}
            />
            <MyPagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageCange={handlePageChange}
            />
        </>
    )
}

export default App
