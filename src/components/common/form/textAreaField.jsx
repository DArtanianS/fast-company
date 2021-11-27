import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

const TextAreaField = ({label, rows, name, value, onChange, error}) => {
    const handleCreateComment = ({target}) => {
        const {name, value} = target
        onChange({name: name, value: value})
    }

    return (
        <div className="mb-4">
            <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
            >
                {label}
            </label
            >
            <textarea
                name={name}
                value={value}
                onChange={handleCreateComment}
                className={cn('form-control', {['is-invalid']: error})}
                id="exampleFormControlTextarea1"
                rows={rows}
            > </textarea>
            {error &&
            <div className='invalid-feedback'>
                {error}
            </div>}
        </div>
    );
};

TextAreaField.defaultProps = {
    rows: 3
}

TextAreaField.propTypes = {
    rows: PropTypes.number,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextAreaField;