const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'Invalid email address';
    }
    if(!userData.email){
        errors.email = 'Email is required';
    }
    if(userData.email.length > 35) {
        errors.email = 'Email must not exceed 35 characters';
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'Password must have at least one number'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'Password must be between 6 and 10 characters long'
    }

    return errors;
}

export default validation;