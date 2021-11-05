import React from 'react'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../../API'
import Qualities, {MySpan} from "../../UI/qualities";



const UserPage = ({ userId }) => {
    const [user, setUser] = useState()
    const history = useHistory()

    const handlrBack = () => {
        history.push('/users/')
    }
    useEffect(() => {
        api.users.getById(userId).then(data => setUser(data))
    },[])

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
                        <li className="list-group-item text-center"><Qualities qualities={user.qualities}/></li>
                        <li className="list-group-item ">
                            <h4>Выполненно встреч  <MySpan color='danger'>{user.completedMeetings}</MySpan></h4>

                        </li>
                        <li className="list-group-item">
                            <h4>Рейтинг <MySpan color='danger'>{user.rate}</MySpan></h4>
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

export default UserPage
