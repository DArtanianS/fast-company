import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

const CheckBoxField = ({name, value, onChange, children, error}) => {
    const handleChange = () => {
        onChange({name: name, value: !value})
    }

    return (
        <div className="form-check mb-4">
            <input
                className={cn('form-check-input', {
                    ['is-invalid']: error
                })}
                type='checkbox'
                value=''
                id={name}
                checked={value}
                onChange={handleChange}
            />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {children}
                </label>
                {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    );
};

CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
};

export default CheckBoxField;