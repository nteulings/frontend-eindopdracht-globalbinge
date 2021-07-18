import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import "./Forms.css"
import axios from "axios";
import { authContext } from "../../context/AuthContext";
import BackgroundImage from "../../components/BackgroundImage";

// [ ] set errors and validation
// [ ] set error messages

function SignIn() {
   const { handleSubmit, formState: { errors }, register } = useForm({mode:"onChange"});
   const { login } = useContext(authContext);
   const [ loading, toggleLoading] = useState(false)
   const [ error, setError ] = useState('')
console.log(error);

   async function onSubmit(data) {
       setError('');
       toggleLoading(true);
       try{
           console.log("data form:", data);
           const response = axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signin",
               {
                username: data.username,
                password: data.password,
               })
           // console.log(response);
           // console.log("what is response token", (await response).data.accessToken);
           // console.log("what is response.data", (await response).data);

           const token = (await response).data.accessToken;
           const id = ((await response).data.id);
           login(token,id);
       } catch(e) {
           console.error(e)
           setError(`Login failed, try again (${e.message})`);
       }
       toggleLoading(false);
   }

    return (
        <>
            <BackgroundImage />
            <form className={"form-container"}
            onSubmit={handleSubmit(onSubmit)}>

            <h1>LOGIN</h1>
            <label htmlFor={"username-field"}>
                <h3>Your username:</h3>
            </label>
            <input
                type="text"
                id={"username-field"}
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
            <button
                type={"submit"}
                className={"form-button"}
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Login'}
                </button>
            <p>don't have an account yet? register <Link to="/register">here</Link></p>
            {error && <p className="error-message">{error}</p>}
        </form>
        </>
    );
}

export default SignIn;