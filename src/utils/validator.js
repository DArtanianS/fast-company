export function validator(data, config) {
    console.log('data', data)
    const errors = {}
    function validate(data, validatMethod, config) {
        let statusValidate
        switch (validatMethod) {
            case 'isRequired': statusValidate = data === ''
                break
            case 'isEmail': {
                const  emailRegExp = /^\S+@\S+\.\S+$/g
                statusValidate = !emailRegExp.test(data)
                break
            }
            case 'isCapitalSymbol': {
                const capitalRegExp = /[A-Z]+/g
                statusValidate = !capitalRegExp.test(data)
                break
            }
            case 'isContainDigit': {
                const digitRegExp = /\d+/g
                statusValidate = !digitRegExp.test(data)
                break
            }
            case 'min': statusValidate = data.length < config.value
                break
            default:
                break
        }
        if(statusValidate) return config.message
    }
     Object.keys(config).map((fieldName) => Object.keys(config[fieldName]).forEach(validatMethod => {
         const error  = validate(data[fieldName], validatMethod, config[fieldName][validatMethod])
         if(error && !errors[fieldName])
             errors[fieldName] = error
     }))


    return errors
}