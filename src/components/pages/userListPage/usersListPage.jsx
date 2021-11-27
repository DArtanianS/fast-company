import React, {useState, useEffect} from 'react'
import {paginate} from "../../../utils/paginate";
import api from '../../../API'
import _ from 'lodash'
import Sidebar from "../../common/sidebar";
import Maincontent from "../../common/maincontent";


const UsersListPage = () => {
    const [users, setUsers] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState(null)
    const [serchNames, setSerchNames] = useState('')

    const [sortBy, setSortBy] = useState({iter: 'name', order: 'asc'})
    let count = 0
    const pageSize = 4

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
        setSelectedProf(prevstate =>{console.log('prevstate', prevstate)
        return selectedProf})
        setCurrentPage(1)
    },[selectedProf])

    useEffect(() => {
        setSerchNames(prevstate => {console.log('prevstate', prevstate)
        return serchNames})
        setCurrentPage(1)
    }, [serchNames])


    const handleSerch = (e) => {
         setSerchNames((prev) => {
             if(prev === ''){
                setSelectedProf(null)
         }
             return e.target.value
         })
    }


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
        setSelectedProf(prev => {
            if(prev === null) {
                setSerchNames('')
            }
            return item
        })
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }


    if(users) {

        const filteredUsers = () => {
            if(serchNames !== ''){
                return users.filter((user) => user.name.toLowerCase().indexOf(serchNames.toLowerCase()) !== -1)
            }
            if(selectedProf !== null) {
                return users.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
            }
            return users
        }

        count = filteredUsers().length
        const sortedUsers = _.orderBy(filteredUsers(), [sortBy.iter], [sortBy.order]) //TODO: почему path а не iter
        const userCropt = paginate(sortedUsers, currentPage, pageSize)

        const clearFilter = () => {
            setSelectedProf(null)
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
                        userCropt,
                        sortBy,
                        pageSize,
                        serchNames,
                        currentPage,
                        handleDelete,
                        handleBookmark,
                        handelSort,
                        handleSerch,
                        handlePageChange}}/>
                </div>
            </div>
        )
    }
    return  'loading...'
}

export default UsersListPage
