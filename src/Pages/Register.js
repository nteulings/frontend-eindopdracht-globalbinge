import React from 'react';
import { useForm } from 'react-hook-form';
import "./Forms.css";
import {Link} from "react-router-dom";


// [x] setup signup
//    [x]  make fields form
//    [x]  basic css styling
// [x] install react hook form
// [x] setup useform handlesubmit
// [x] set register and required fields
// [ ] set errors and validation
// [ ] set error messages
// [ ] set css


export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log("what is data", data)
    }
    console.log("wat is errors", errors)

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
                <span className="checkmark"></span>
            </label>

            <button
                className={"form-button"}
                onClick={onSubmit}
            >sign up
            </button>
            <p>already have an account login <Link to="/login">here</Link></p>

        </form>
        </>
    );
}