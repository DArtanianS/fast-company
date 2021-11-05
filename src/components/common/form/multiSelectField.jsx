import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiSelectField = ({options, onChange, name, label}) => {
    const optionsArray =
        !Array.isArray(options) && typeof(options) === 'object'
            ? Object.keys(options).map((optionName) => ({
                label: options[optionName].name,
                value: options[optionName]._id
            }))
            : options

    const handleChange = (value) => {
        console.log('target multiselect', value)
        // console.log('target selectField',target)
        // onChange({name: target.name, value: target.value})
        onChange({name: name, value: value})
    }

    return (
        <div className='mb-4'>
            <label className='form-label'>{label}</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                options={optionsArray}
                className='basic-multi-select'
                classNamePrefix='select'
                onChange={handleChange}
                name={name}
            />
        </div>
    )
}

MultiSelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default MultiSelectField