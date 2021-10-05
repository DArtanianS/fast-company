import React from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import api from '../API'
import QualitiesList from "./qualitiesList";


const User = () => {
    const [user, setUser] = useState()
    const {userId} = useParams()
    const history = useHistory()

    const handlrBack = () => {
        history.push('/users/')
    }

    api.users.getById(userId).then(data => setUser(data))

    if(user) {
        return (
            <>
                <div className="container col-md-6">
                <div className="card ">
                    <h2 className="card-header text-center">{user.name}</h2>
                    <div className="card-body">
                        <h5 className="card-title">Профессия: {user.profession.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item text-center"><QualitiesList qualities={user.qualities}/></li>
                        <li className="list-group-item ">
                            <h4>Выполненно встреч  <span className="badge bg-danger">{user.completedMeetings}</span></h4>

                        </li>
                        <li className="list-group-item">
                            <h4>Рейтинг  <span className="badge bg-danger">{user.rate}</span></h4>
                        </li>
                    </ul>
                    <div className="card-body text-center">
                        <button type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    handlrBack()
                                }}>
                            Все пользователи
                        </button>
                    </div>
                </div>
                </div>
            </>
        )
    }
    return  (<h1>Loading</h1>)
}

export default User
