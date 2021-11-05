import React, {useEffect, useState} from 'react'
import {validator} from '../../utils/validator'
import TextField from '../common/form/textField'

const LoginForm = () => {
    const [data, setData] = useState({email: '', password: ''})
    const [errors, setErrors] = useState('')

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState, [target.name]: target.value
        }))
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
        }
    }

    useEffect(() => {validate()}, [data])

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
                <button type='submit' className='"btn btn-primary w-100 mx-auto' disabled={!isValid}>Submit</button>
            </form>
    )
}

export default LoginForm