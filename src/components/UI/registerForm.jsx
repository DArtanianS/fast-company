import React, {useEffect, useState} from 'react'
import {validator} from '../../utils/validator'
import TextField from '../common/form/textField'
import api from '../../API'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
            email: '',
            password: '',
            profession: '',
            sex: 'male',
            qualities: [],
            licence: false
        })
    const [qualities, setQualities] = useState({})
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState([])

    useEffect(() => {
        api.professions.fetchAll().then(profession =>
            setProfessions(profession))
        api.qualities.fetchAll().then(qualitie =>
        setQualities(qualitie))
    },[])

    const handleChange = (target) => {
        if(target) {
            setData((prevState) => ({
                ...prevState, [target.name]: target.value
            }))
        }
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Электронный адрес введен не корректно'
            }
        },
        password: {
            isRequired: {
                message: 'Установка проля обязательна'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотябы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотябы одну цифру'
            },
            min: {
                message: 'Пароль должен содержать минимум 8 символов',
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: 'Обязательно выберите вашу профессию'
            }
        },
        licence: {
            isRequired: {
                message: 'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const error = validator(data, validatorConfig)
        setErrors(error)
        return Object.keys(error).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if(!isValid) return
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Ваш e-mail'
                value={data.email}
                name='email'
                errors={errors}
                onChange={handleChange}
            />
            <TextField
                label='Ваш пароль'
                type='password'
                value={data.password}
                name='password'
                errors={errors}
                onChange={handleChange}
            />
            <SelectField
                onChange={handleChange}
                value={data.profession}
                label='Выбери свою профессию'
                options={professions}
                defaultOption='Choose...'
                error={errors.profession}
            />
            <RadioField
                label='Выберите ваш пол'
                name='sex'
                onChange={handleChange}
                value={data.sex}
                options={[
                    {name: 'Male', value: 'male'},
                    {name: 'Female', value: 'female'},
                    {name: 'Other', value: 'other'}
                ]}
            />

            <MultiSelectField
                label='Выберите ваши качества'
                options={qualities}
                onChange={handleChange}
                 name='qualities'
            />

            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name='licence'
                error={errors.licence}
            >
                Подтвердите <a>лицензионное соглашение</a>
            </CheckBoxField>

            <button type='submit' className='"btn btn-primary w-100 mx-auto' disabled={!isValid}>Submit</button>
        </form>
    )
}

export default RegisterForm;