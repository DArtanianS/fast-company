import React, {useState, useEffect} from 'react'
import {paginate} from "../utils/paginate";
import api from '../API'
import _ from 'lodash'
import Sidebar from "./sidebar";
import Maincontent from "./maincontent";


const Users = () => {
    const [users, setUsers] = useState()

    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({iter: 'name', order: 'asc'})
    let count = 0
    const pageSize = 4

    console.log('api.professions', api.professions);
    console.log('api.users', api.users);

    useEffect(() => {
        api.professions.fetchAll().then((data) =>
            setProfessions(
                data
            )
        )
    },[])

    useEffect(() => {
        api.users.fetchAll().then(data => setUsers(data))
    },[])


    useEffect(() => {
        if((currentPage - 1) === (count / pageSize)) {
            setCurrentPage(currentPage - 1)
        }
    },[users])

    useEffect(() => {
        setCurrentPage(1)
    },[selectedProf])


    const handleDelete = (userId) => {
        return setUsers([...users].filter((user) => user._id !== userId))
    }

    const handleBookmark = (id) => {
        return setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark
                }
                return user
            })
        )
    }


    const handelSort = (item) => {
        setSortBy({iter: item.iter, order: item.order})
    }

    const handleProfessionsSelect = (item) => {
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }


    if(users) {

        const filteredUsers = selectedProf
            ? users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
            : users
        count = filteredUsers.length
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]) //TODO: почему path а не iter
        const userCropt = paginate(sortedUsers, currentPage, pageSize)

        const clearFilter = () => {
            setSelectedProf()
        }

        return (

            <div className="d-flex flex-column">

                <div className="d-flex flex-row">
                    <Sidebar {...{
                        professions,
                        selectedProf,
                        handleProfessionsSelect,
                        clearFilter}}/>
                    <Maincontent {...{
                        count,
                        handleBookmark,
                        handelSort,
                        userCropt,
                        handleDelete,
                        sortBy, pageSize,
                        currentPage,
                        handlePageChange}}/>
                </div>
            </div>
        )
    }
    return  'loading...'
}

export default Users
