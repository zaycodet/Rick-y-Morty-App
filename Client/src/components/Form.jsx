import { useState } from 'react';
import validation from './validation';
import { FormContainer } from './styles';

const Form = ({login}) => {
    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <FormContainer>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input type="text" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password: </label>
            <input type="password" name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}

            <button>Submit</button>
        </form>
        </FormContainer>

    )
}

export default Form;