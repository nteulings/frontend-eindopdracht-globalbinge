import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "./Forms.css"

// [x] change to hook-form
//    [x]  change fields form
//    [x]  basic css styling
// [x] install react hook form
// [x] setup useform
// [ ] set errors and validation
// [ ] set error messages

function SignIn() {
   const { handleSubmit, register, formState: { errors }} = useForm();

   function onSubmit(data) {
       console.log(data)
   }
    console.log("wat is errors", errors)

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