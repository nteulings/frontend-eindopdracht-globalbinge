import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./Forms.css"
import axios from "axios";
import { authContext } from "../context/AuthContext";

// - [x] import axios
// - [x] Make asynch function
// - [x] try / catch block
// - [x] try: POST request to endpoint:https://polar-lake-14365.herokuapp.com/api/auth/signin
//     - [x] POST request username & password)
// - [x] what is response. success:
// - [x] pass token to context:
//     - [x] import useContext en AuthContext
//     - [x] Destructure login function
// - [ ] call login function when success + token??
// ---
// [ ] set errors and validation
// [ ] set error messages

function SignIn() {
   const { handleSubmit, register } = useForm();
   const { login } = useContext(authContext);
   console.log("what is", login)

   async function onSubmit(data) {
       try{
           console.log("data form:", data);
           const response = axios.post("https://polar-lake-14365.herokuapp.com/api/auth/signin",
               {
                username: data.username,
                password: data.password,
               })
           console.log("what is response", (await response).data.accessToken);
           login((await response).data.accessToken);
       } catch (error) {
           console.log(error)
       }

   }

    return (
        <>
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
                    {required: true, maxLength: 8})}
                />
            <span>
                {/*{error-message}*/}
            </span>
            <label htmlFor={"password-field"}>
                <h3>Fill in your password:</h3>
            </label>
            <input
                type="text"
                id={"password"}
                placeholder="password"
                name={"password"}
                {...register("password",
                    {required: true, min: 6, maxLength: 8})} />
            <span>
                {/*{message}*/}
            </span>
            <button
                className={"form-button"}
                onClick={console.log()}
            >sign in</button>
            <p>don't have an account yet? register <Link to="/register">here</Link>
            </p>
        </form>
        </>
    );
}

export default SignIn;