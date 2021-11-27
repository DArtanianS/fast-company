import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import api from '../API'
import TextField from '../components/common/form/textField'
import SelectField from '../components/common/form/selectField'
import RadioField from '../components/common/form/radioField'
import MultiSelectField from '../components/common/form/multiSelectField'
import {validator} from '../utils/validator'

const Edit = () => {
    const [data, setData] = useState({})
    const [qualities, setQualities] = useState({})
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState([])
    const history = useHistory()
    const {userId} = useParams()

    useEffect(() => {
        api.users.getById(userId).then(user =>
            setData(user))
        api.professions.fetchAll().then(profession =>
            setProfessions(profession))
        api.qualities.fetchAll().then(qualities =>
            setQualities(qualities))
    },[])

    const handleChange = (target) => {
        if(target) {
            let {name, value} = target
            if(name === 'profession'){
                Object.keys(professions).forEach(profession => {
                    if(professions[profession]._id === value){
                        value =  professions[profession]
                    }})
            }
        if(name === 'qualities'){
            let arrayQualities = []
            Object.keys(qualities).forEach(qualitie => {
                value.forEach(val => {
                    if(qualities[qualitie]._id === val.value){
                        arrayQualities.push(qualities[qualitie])}
                })

            })
            value = arrayQualities
        }
            setData((prevState) => ({
                ...prevState, [name]: value
            }))
        }
    }

    const validatorConfig = {
        name: {
            isRequired: {
                message: 'Поле \'Имя\' обязательно для заполнения'
            }
        },
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Электронный адрес введен не корректно'
            }
        },
        profession: {
            isRequired: {
                message: 'Обязательно выберите вашу профессию'
            }
        },

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
        api.users.update(userId, data)
        history.push(`/users/${userId}`)
    }
    const handleBack = () => {
      history.goBack()
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className='col-md-4 mb-3'>
                    <button
                        type='button'
                        className='btn btn-primary w-100 mx-auto'
                        onClick={handleBack}
                    >
                        Back
                    </button>
                </div>
                <div className="col-md-6 offset-md-4 shadow p-4">
                    {data.email
                        ? <form onSubmit={handleSubmit}>
                            <TextField
                                label='Ваше Имя'
                                value={data.name}
                                name='name'
                                errors={errors}
                                onChange={handleChange}
                            />
                            <TextField
                                label='Ваш e-mail'
                                value={data.email}
                                name='email'
                                errors={errors}
                                onChange={handleChange}
                            />
                            <SelectField
                                onChange={handleChange}
                                value={data.profession._id}
                                label='Выбери свою профессию'
                                options={professions}
                                defaultOption='Choose...'
                                error={errors.profession}
                                name='profession'
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
                                value={data.qualities.map(qualitie => ({label: qualitie.name, value: qualitie._id}))}
                                label='Выберите ваши качества'
                                options={qualities}
                                onChange={handleChange}
                                name='qualities'
                            />

                            <button type='submit' className='btn btn-primary w-100 mx-auto' disabled={!isValid}>Submit</button>
                        </form>
                        : <p>Loading</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Edit