import React, { useState } from 'react'
import {fetchAll} from "../API/fake.api/user.api";

let deleteUsersId = []

const colorBadges = ['primary' , 'danger']


const Users = () => {

    const newFetchAll = (deleteUsersId) =>  {
        if (!deleteUsersId) {
            return fetchAll()
        }
        return fetchAll().filter((val) => {
            if(!deleteUsersId.find(value => value === val._id
            )){
                return val
            }
        })
    }

    let newArrayUsers = deleteUsersId.length > 0 ? newFetchAll(deleteUsersId) : fetchAll()

    const [users, setUsers] = useState(newArrayUsers)


    const handleDelete = (userId) => {
        deleteUsersId.push(userId)
        setUsers(newFetchAll(deleteUsersId))
    }
    const renderPharse = (namber) => {if(namber === 1 || namber > 4 ){
        return 'человек тусанет'
    }
    return 'человека тусанут'

    }

    const colorTopBage = users.length === 0 ? colorBadges[1] : colorBadges[0]

    const textTopSpan = () => {
        if(users.length === 0 ){
            return 'Никто не тусанет с тобой'
        }

        return (
            `${users.length} ${renderPharse(users.length)} с тобой сегодня`
        )
    }

    const renderColumnTable = (arrayUsers) => {
        return (arrayUsers.map(item =>
            <tr key={item._id}>
                <td  key={item._id+'name'}>
                    {item.name}
                </td>
                <td  key={item._id+'qualities'}>
                    {item.qualities.map(val => <span key={item._id+val.name} className={'p-2 m-2 badge bg-'+val.color}>{val.name}</span>)}
                </td>
                <td  key={item._id+'profession'}>
                    {item.profession.name}
                </td>
                <td  key={item._id+'completedMeetings'}>
                    {item.completedMeetings}
                </td>
                <td  key={item._id+'rate'}>
                    {item.rate + '/5'}
                </td>
                <td  key={item._id+'delete'}>
                    <button key={item._id+'button'} onClick={() => {handleDelete(item._id)}} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>)
        )
    }

    const renderTable = function() {
        if(users.length > 0)
        return (
            <table key='Table12' className="table">
                <thead key='headTable12'>
                <tr key='headTable1111'>
                    <th key='name' scope="col">Имя</th>
                    <th key='qualities' scope="col">Качества</th>
                    <th key='profession' scope="col">Профессия</th>
                    <th key='completedMeetings' scope="col">Встретился, раз</th>
                    <th key='rate' scope="col">Оценка</th>
                    <th key='delete' scope="col"></th>
                </tr>
                </thead>
                <tbody key='headTable22'>
                {renderColumnTable(users)}
                </tbody>
            </table>
        )
    }



    return <>
        <span key='informCountPeople' style={{fontSize: "25px"}} className={ 'p-2 m-2 badge bg-' + colorTopBage}>
            {textTopSpan()}
        </span>
        {renderTable()}
    </>
}

export default Users