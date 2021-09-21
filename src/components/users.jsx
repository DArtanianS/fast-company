import React, {useState, useEffect} from 'react'
import MyTableBody from './UI/table/MyTableBody'
import MyTableThead from './UI/table/MyTableThead'
import PropTypes from 'prop-types'
import MyPagination from "./UI/pagination/MyPagination";
import {paginate} from "../utils/paginate";
import SerchStatus from "./serchStatus";
import GroupList from "./groupList";
import api from '../API'

const Users = ({ users, handleDelete, handleBookmark }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const pageSize = 4
    useEffect(() => {
        api.professions.fetchAll().then((data) =>
            setProfessions(
                data
            )
        )
    },[])

    useEffect(() => {
        if((currentPage - 1) === (count / pageSize)) {
            setCurrentPage(currentPage - 1)
        }
    },[users])

    useEffect(() => {
        setCurrentPage(1)
    },[selectedProf])

    const handleProfessionsSelect = (item) => {
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const filteredUsers = selectedProf
        ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
        : users
    const count = filteredUsers.length
    const userCropt = paginate(filteredUsers, currentPage, pageSize)

    const clearFilter = () => {
        setSelectedProf()
    }

    return (
        <div className="d-flex">

                {professions &&
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemsSelect={handleProfessionsSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
                }
            <div className="d-flex flex-column">
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
                <div className="d-flex justify-content-center">
                    <MyPagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageCange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Users
