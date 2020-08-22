import React from 'react';
import Input from "../../../elements/input";
import Button from "../../../elements/button";
import { useFormik } from "formik";
import { loginInputsData } from "./loginConfig";
import { loginSchema } from "./loginConfig";
import '../auth.css';

const LoginForm = ({ onSubmit, context }) => {
    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema:loginSchema,
        onSubmit
    });

    const {
        values,
        handleChange,
        handleSubmit,
        errors,
        touched
    } = formik;

    return (
        <form
            onSubmit={handleSubmit}
            className='form'>
            <div className='form-header'>
                <h2>Login</h2>
                <Button
                    onClick={context.hideLoginForm}
                    type='button'
                    className='fa fa-times close'/>
            </div>
            {
                loginInputsData.map((item, index) => (
                        <Input
                            key={index}
                            value={values[item.name]}
                            onChange={handleChange}
                            error={errors}
                            touched={touched}
                            {...item}
                        />
                    ))
            }
            <Button
                type='submit'
                text='Log in'
                className='form-button'
            />
            <div className='footer-message'>
                Don't have an account?
                <Button
                    text='Sign Up'
                    type='button'
                    className='open-other'
                />
            </div>
        </form>
    );
};

export default LoginForm;