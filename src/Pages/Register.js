import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import "./Forms.css";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

// authentication:
// - [x] install axios
// - [x] import axios
// - [x] Make asynch function
// - [x] try / catch block
// - [x] try: POST request to endpoint:https://polar-lake-14365.herokuapp.com/api/auth/signup
//     - [x] POST request username & password)
// - [x] success message user
// - [x] redirect to login with delay
// - [X] set errors en loading
// ----
// - [x] set errors and validation
// - [x] set error messages
// - [ ] set css error messages


export default function SignUp() {
    const [ loading, toggleLoading] = useState(false)
    const [ error, setError ] = useState('')
    const history = useHistory()
    const { handleSubmit, formState: { errors }, register } = useForm({mode:"onChange"});
    const [ registerSuccess, toggleRegisterSuccess ] = useState(false)
    console.log(errors);
    console.log(error);


    async function onSubmit(data) {
        setError('');
        toggleLoading(false);
        console.log("what is data", data)

        try {
            const response = await axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signup",
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    role: ["user"]
                });
            console.log(response);

            toggleRegisterSuccess(true);
            history.push('/registersuccess')
            // setTimeout(() => history.push('/login'), 2000);

        } catch(e) {
            console.error(e);
            setError(`registration failed, try again (${e.message})`);
        }
        toggleLoading(false);
    }

    return (
        <>
            <form className={"form-container"}
              onSubmit={handleSubmit(onSubmit)}>
            <h1>REGISTER</h1>
            <label htmlFor={"username-field"}>
                <h3>Your username:</h3>
            </label>
            <input
                id={"username-field"}
                type="text"
                placeholder="username"
                name={"username"}
                {...register("username",
                    {
                    required: {
                    value: true,
                    message: 'username is required'},
                    maxLength: {
                    value: 8,
                    message: 'username may not exceed 8 characters'},
                    minLength: {
                    value: 3,
                    message: 'username must contain at least 3 characters'}
                    })}
            />
                {errors.username && <p className={"error"}>{errors.username.message}</p>}

                <label htmlFor={"email-field"}>
                <h3>Your email adress</h3>
            </label>

            <input
                id={"email-field"}
                type="email"
                placeholder="email adress"
                name="email"
                {...register("email",
                    {
                        required: {
                        value: true,
                        message: 'email address is required'},
                        maxLength: {
                        value: 64,
                        message: 'this field has a maximum of 64 characters'},
                    })}
                />
                {errors.email && <p className={"error"}>{errors.email.message}</p>}


                <label htmlFor={"password-field"}>
                <h3>Fill in your password:</h3>
            </label>

            <input
                type="text"
                id={"password"}
                placeholder="password"
                name={"password"}
                {...register("password",
                    {
                        required: {
                            value: true,
                            message: 'please fill in a password'},
                            maxLength: {
                            value: 8,
                            message: 'password between 6 and 8 characters'},
                            minLength: {
                            value: 6,
                            message: 'password between 6 and 8 characters'}
                    })}
            />
                {errors.password && <p className={"error"}>{errors.password.message}</p>}

                {/*get from api?*/}
            <label><h3>Select your country of origin:</h3></label>
            <select>
                <option value="Netherlands">Netherlands</option>
                <option value="Germany"> Germany</option>
            </select>
            <label className={"checkbox-container"}>
                <p><strong>I have completed this form truthfully.</strong></p>
            <input className={"checkmark"}
                type="checkbox"
                name={"checked"}
                // checked={"checked"}
                {...register("checked",
                    {
                        required: {
                            value: true,
                            message: 'you must confirm you are honest'},
                    })}
            />
                {errors.checked && <p className={"error"}>{errors.checked.message}</p>}

                <span className="checkmark"> </span>
            </label>

            <button
                type={"submit"}
                className={"form-button"}
            >
                {loading ? 'sending...' : "sign up"}
            </button>

            <p>already have an account login <Link to="/login">here</Link></p>
                {registerSuccess === true &&  <p>Successfully registered, you will be redirected to the login page</p>}
                {error && <p className="error-message">{error}</p>}

            </form>
        </>
    );
}