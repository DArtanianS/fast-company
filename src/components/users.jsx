import React, {useState} from 'react'
import MyTableBody from './UI/table/MyTableBody'
import MyTableThead from './UI/table/MyTableThead'
import PropTypes from 'prop-types'
import MyPagination from "./UI/pagination/MyPagination";
import {paginate} from "../utils/paginate";
import SerchStatus from "./serchStatus";
import GroupList from "./groupList";

const Users = ({ users, handleDelete, handleBookmark }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const count = users.length
    const pageSize = 4

    const handlePageChange = (pageIndex) => {
        console.log('pageIndex', pageIndex)
        setCurrentPage(pageIndex)
    }

    const userCropt = paginate(users, currentPage, pageSize)

    return (
        <>
            <GroupList/>
            <SerchStatus usersCount={count} />
            {users.length > 0 ? (
                <table key="Table12" className="table">
                    <MyTableThead />
                    <MyTableBody
                        users={userCropt}
                        handleDelete={handleDelete}
                        handleBookmark={handleBookmark}
                    />
                </table>
            ) : (
                ''
            )}
            <MyPagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageCange={handlePageChange}
            />
        </>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Users
