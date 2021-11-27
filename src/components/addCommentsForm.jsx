import React from 'react';
import SelectField from "./common/form/selectField";
import TextAreaField from "./common/form/textAreaField";
import PropTypes from 'prop-types';

const AddCommentsForm = ({SelectChange, CreateComment, isValid, userId, users, content}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        CreateComment()
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>New comment</h2>
            <div className="mb-4">
                <SelectField
                    name='userId'
                    onChange={SelectChange}
                    value={userId}
                    options={users}
                    defaultOption='Выберите пользователя'
                />
            </div>

            <TextAreaField
                label='Сообщение'
                name='content'
                value={content}
                onChange={SelectChange}
            />
            <div className='row justify-content-end'>
                <button
                    type='submit'
                    className='btn btn-primary col-3 mb-3 me-3'
                    disabled={!isValid}
                >
                    Опубликовать
                </button>
            </div>

        </form>
    );
};

AddCommentsForm.propTypes = {
    SelectChange: PropTypes.func,
    CreateComment: PropTypes.func,
    isValid: PropTypes.bool,
    userId: PropTypes.string,
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    content: PropTypes.string
};

export default AddCommentsForm;