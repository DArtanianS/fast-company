import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

/**
 * SelectField - поле выбора. Переиспользуемый компонент
 * @param label - Заголовок поля
 * @param value - текущее значение поля
 * @param onChange - функция смены текущего значения
 * @param defaultOption - текст отображающийся в строке выбора по умолчанию
 * @param options - список полей с обязательными полями name, и data
 * @param error - строка с ошибкой
 * @param name - название поля
 * @returns {JSX.Element}
 * @constructor
 */
const SelectField = ({label, value, onChange, defaultOption, options, error, name}) => {
    console.log('value', value)
    const optionsArray =
        !Array.isArray(options) && typeof(options) === 'object'
            ? Object.keys(options).map((optionName) => ({
                name: options[optionName].name,
                value: options[optionName]._id
                }))
            : options.map(opt => ({ name: opt.name, value: opt._id }))

    const handleChange = ({target}) => {
        const {name, value} = target
        onChange({name: name, value: value})
    }

    return (
        <div className='mb-4'>
            <label htmlFor='validationCustom04' className='form-label'>{label}</label>
            <select
                className={cn('form-select', {['is-invalid']: error})}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option
                    key='defaultOption'
                    disabled
                    value=''
                >
                    {defaultOption}
                </option>
                {optionsArray && optionsArray.map(option => {
                    return (<option
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </option>)}
                )
                }
            </select>
            {error &&
            <div className='invalid-feedback'>
                {error}
            </div>}
        </div>

    )
}

SelectField.defaultProps = {
    type: "text",
    defaultOption: ""
}

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    defaultOption: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string,
    error: PropTypes.string
}

export default SelectField