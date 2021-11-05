import React, {useState} from 'react';
import cn from 'classnames'
import PropTypes from 'prop-types';

const TextField = ({label, type, value, name, errors, onChange}) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = ({target}) => {
        console.log('target textField',target)
        onChange( {name: target.name, value: target.value})
    }
    const  toggleShowPassword = () => {
      setShowPassword(prevState => !prevState)
    }
    return (
        <div className='mb-4'>
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    onChange={handleChange}
                    type={showPassword ? 'text' : type}
                    id={name}
                    name={name}
                    value={value}
                    className={cn('form-control', {
                        ['is-invalid']:  errors[name]
                    })}
                />
                {type === 'password' && (
                    <button
                        className='btn btn-outline-secondary'
                        type='button'
                        onClick={toggleShowPassword}
                    >
                        <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}>
                        </i>
                    </button>
                )}
                {errors && <div className='invalid-feedback'>{errors[name]}</div>}
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: 'text'
}

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;