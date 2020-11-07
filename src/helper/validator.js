const validator = (data = {}) => {
    let errors = {}, 
    isValidEmail = /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/,
    passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}/;

    if(data.hasOwnProperty('username') && data.username.trim() === ''){
        errors.username = 'username is empty.';
    }else if(data.hasOwnProperty("username") && !isValidEmail.test(data.username.trim())) {
        errors.username = "username is not valid.";
    }

    if(data.hasOwnProperty('password') && data.password.trim() === ''){
        errors.password = 'password is empty.';
    }else if(data.hasOwnProperty('password') &&  !passwordReg.test(data.password.trim())){
        errors.password = 'must contain at least one number, one uppercase and lowercase letter.';
    }else if(data.hasOwnProperty('password') && data.password.trim().length < 8){
        errors.password = 'must be 8 characters long.'
    }

    return errors;
}

export default validator;