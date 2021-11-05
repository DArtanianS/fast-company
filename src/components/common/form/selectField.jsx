import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

/**
 * SelectField - поле выбора. Переиспользуемый компонент
 * @param label - Заголовок поля
 * @param value - текущее значение поля
 * @param onChange - функция смены текущего значения
 * @param defaultOption - текст отображающийся в строке выбора по умолчанию
 * @param options - список полей с обязательной структуроу {...{_id: 'id',name: 'Data'}} либо [...{_id: 'id',name: 'Data'}]
 * @param error - строка с ошибкой
 * @returns {JSX.Element}
 * @constructor
 */
const SelectField = ({label, value, onChange, defaultOption, options, error}) => {
    const optionsArray =
        !Array.isArray(options) && typeof(options) === 'object'
            ? Object.keys(options).map((optionName) => ({
                name: options[optionName].name,
                value: options[optionName]._id
                }))
            : options

    const handleChange = ({target}) => {
        console.log('target selectField',target)
        onChange({name: target.name, value: target.value})
    }

    return (
        <div className='mb-4'>
            <label htmlFor='validationCustom04' className='form-label'>{label}</label>
            <select
                className={cn('form-select', {['is-invalid']: error})}
                id='validationCustom04'
                name='profession'
                value={value}
                onChange={handleChange}
            >
                <option selected={value === ''} disabled value="">
                    {defaultOption}
                </option>
                {optionsArray && optionsArray.map(option =>
                    <option
                    key={option.value}
                    value={option.value}
                >
                    {option.name}
                </option>)}
            </select>
            {error &&
            <div className='invalid-feedback'>
                {error}
            </div>}
        </div>

    )
}

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    defaultOption: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.string
}

export default SelectField