import React, {useEffect, useState} from 'react';
import AddCommentsForm from "../../addCommentsForm";
import Comment from "./comment";
import api from "../../../API";
import {validator} from "../../../utils/validator";
import PropTypes from 'prop-types';

const CommentsList = ({userId}) => {
    const [users, setUsers] = useState()
    const [newComment, setNewComment] = useState({userId: '', content: ''})
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState({})

    useEffect(() => {
        api.users.fetchAll().then(data => setUsers(data))
        api.comments.fetchCommentsForUser(userId).then(data => {
            setComments(data)
        })
    },[])

    const validatorConfig = {
        userId: {
            isRequired: {
                message: 'Выберите пользователя'
            }
        },
        content: {
            isRequired: {
                message: 'Поле \'Сообщение\' обязательно для заполнения'
            }
        }
    }

    useEffect(() => {
        validate()
        api.comments.fetchCommentsForUser(userId).then(data => {
            setComments(data)
        })
    }, [newComment])


    const validate = () => {
        const error = validator(newComment, validatorConfig)
        setErrors(error)
        return Object.keys(error).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleChange = (target) => {
        if(target) {
            let {name, value} = target
            setNewComment((prevState) => ({
                ...prevState, [name]: value
            }))

        }
    }

    const handleCreateComment = () => {
        api.comments.add({userId: newComment.userId, pageId: userId, content: newComment.content})
        setNewComment({userId: '', content: ''})
    }

    const handleDeleteComment = (id) => {
        api.comments.remove(id)
        api.comments.fetchCommentsForUser(userId).then(data => {
            setComments(data)
        })
    }

if(users) {
    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentsForm
                        content={newComment.content}
                        SelectChange={handleChange}
                        CreateComment={handleCreateComment}
                        isValid={isValid}
                        userId={newComment.userId}
                        users={users}
                    />
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body ">
                    <h2>Comments</h2>
                    <hr/>
                    <Comment
                        users = {users}
                        comments = {comments}
                        DeleteComment = {handleDeleteComment}
                    />
                </div>
            </div>
        </>
    );
}
    return  (<h1>Loading</h1>)
};

CommentsList.propTypes = {
    userId: PropTypes.string
};

export default CommentsList;