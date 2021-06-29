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
// - [ ] set errors and validation
// - [ ] set error messages
// - [ ] set css error messages


export default function SignUp() {
    const [ loading, toggleLoading] = useState(false)
    const [ error, setError ] = useState('')
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const [ registerSuccess, toggleRegisterSuccess ] = useState(false)

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);
        console.log("what is data", data)

        try {
            const response = await axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signup",
                {
                    email: data.email,
                    username: data.username,
                    password: data.password,
                    // role: user???
                });
            console.log(response);

            toggleRegisterSuccess(true);

            setTimeout(() => history.push('/login'), 2000);

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
                    {required: true, maxLength: 8})}
            />

            <label htmlFor={"email-field"}>
                <h3>Your email adress</h3>
            </label>

            <input
                id={"email-field"}
                type="email"
                placeholder="email adress"
                name="email"
                {...register("email",
                    {required: true, maxLength: 64})}
            />

            <label htmlFor={"password-field"}>
                <h3>Fill in your password:</h3>
            </label>

            <input
                type="text"
                id={"password"}
                placeholder="password"
                name={"password"}
                {...register("password",
                    {required: true, min: 6, maxLength: 8})}
            />
            {/*get from api?*/}
            <label><h3>Select your country of origin:</h3></label>
            <select>
                <option value="Netherlands">Netherlands</option>
                <option value="Germany"> Germany</option>
            </select>
            <label className={"checkbox-container"}>
                <h3>I have completed this form truthfully.</h3>
            <input
                type="checkbox"
                name={"checked"}
                // checked={"checked"}
                {...register("checked",
                    {required: true})}
                />
                {/*<span className="checkmark"></span>*/}
            </label>

            <button
                type={"submit"}
                className={"form-button"}
                disabled={loading}
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