import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "../../../utils/avatar";

/**
 * UserCard - карточка, отображающая информацию о пользователе, с кнопкой для перехода к ее редактированию
 * @param user - объект, содержащий информацию о пользователе с обязательными полями
 *              name - имя пользователя
 *              profession.name - название профессии
 *              rate -  рейтинг данного пользователя
 * @param onClick - функция для осущитвления пререхода на форму редактирования
 * @returns {JSX.Element}
 * @constructor
 */
const UserCard = ({user, onClick}) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <button
                    className="position-absolute top-0 end-0 btn btn-light btn-sm"
                    onClick={onClick}
                >
                    <i className="bi bi-gear"></i>
                </button>
                <div className="d-flex flex-column align-items-center text-center position-relative">
                   <Avatar/>
                    <div className="mt-3">
                        <h4>{user.name}</h4>
                        <p className="text-secondary mb-1">{user.profession.name}</p>
                        <div className="text-muted">
                            <i className="bi bi-caret-down-fill text-primary" role="button"></i>
                            <i className="bi bi-caret-up text-secondary" role="button"></i>
                            <span className="ms-2">{user.rate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.object,
    onClick: PropTypes.func
};

export default UserCard;