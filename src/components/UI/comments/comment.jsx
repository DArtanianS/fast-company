import React from 'react';
import Avatar from '../../../utils/avatar'
import OutputData from '../../../utils/dataFormat'
import PropTypes from 'prop-types';

const Comment = ({users, comments, DeleteComment}) => {
    let timeCreateComments = new OutputData()
    return (
        <>
            {
                comments
                    .sort((a, b) => Number(b.created_at) - Number(a.created_at))
                    .map((comment, key) =>
                    <div
                        key={key}
                        className="bg-light card-body  mb-3"
                    >
                        <div className="row">
                            <div className="col">
                                <div className="d-flex flex-start ">
                                    <Avatar/>
                                    <div className="flex-grow-1 flex-shrink-1">
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-1 ">
                                                    {`${users.find((user => user._id === comment.userId)).name} - `}
                                                    <span className="small">
                                                        {timeCreateComments.output(comment.created_at)}
                                          </span>
                                                </p>
                                                <button
                                                    className="btn btn-sm text-primary d-flex align-items-center"
                                                    onClick={() => {
                                                        DeleteComment(comment._id)
                                                    }}
                                                >
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                            <p className="small mb-0">{comment.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </>
    );
};

Comment.propTypes = {
    users: PropTypes.array,
    comments: PropTypes.array,
    DeleteComment: PropTypes.func
};

export default Comment;