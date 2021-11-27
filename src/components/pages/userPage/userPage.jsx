import React from 'react'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../../API'
import UserCard from "../../UI/infoCards/userCard";
import QualitiesCard from "../../UI/infoCards/qualitiesCard";
import MeetingsCard from "../../UI/infoCards/meetingsCard";
import CommentsList from "../../UI/comments/commentsList";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState()
    const history = useHistory()

    const handleBack = () => {
        history.push(`/users/${userId}/edit`)
    }

    useEffect(() => {
        api.users.getById(userId).then(data => setUser(data))
    },[])



    if(user) {
        return (
            <div className='container'>
                <div className="row gutters-sm">
                    {/* Информация о пользователе */}
                    <div className="col-md-4 mb-3">
                        {/* Блок с аватар */}
                        <UserCard
                            user={user}
                            onClick={() => handleBack()}
                        />
                        {/* Качества */}
                        <QualitiesCard
                            qualities={user.qualities}
                        />
                        {/* Completed meetings */}
                        <MeetingsCard
                            meetings={user.completedMeetings}
                        />

                </div>
                    {/* Блок комментариев */}
                    <div className="col-md-8">
                        <CommentsList
                            userId={userId}
                        />
                    </div>
                </div>
            </div>
        )
    }
    return  (<h1>Loading</h1>)
}

UserPage.propTypes = {
    userId: PropTypes.string
}

export default UserPage