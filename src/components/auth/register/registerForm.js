import React from 'react';
import Button from "../../../elements/button";
import Input from "../../../elements/input";
import { useFormik } from "formik";
import { registerInputData } from "./registerConfig";
import { registerSchema } from "./registerConfig";

import '../auth.css';


const RegisterForm = ({ onSubmit, context }) => {
    const formik = useFormik({
        initialValues:{
            email:'',
            displayName:'',
            password:'',
            confirmPassword:''
        },
        validationSchema:registerSchema,
        onSubmit
    });

    const {
        values,
        handleChange,
        handleSubmit,
        touched,
        errors
    } = formik;

    return (
        <form
            className='form'
            onSubmit={handleSubmit}
        >
            <div className='form-header'>
                <h2>
                    <i className="fas fa-check-circle"></i>
                    Your Info
                </h2>
                <Button
                    onClick={context.hideRegisterForm}
                    type='button'
                    className='fa fa-times close'/>
            </div>
            {
                registerInputData.map((item, index) => (
                        <Input
                            key={index}
                            {...item}
                            value={values[item.name]}
                            onChange={handleChange}
                            error={errors}
                            touched={touched}
                        />
                    ))
            }
            <div className='footer-message'>
                By clicking agree, you are agreeing to
                our terms and conditions and our privacy policy.
            </div>
            <div className='footer-message'>
                Already have an account?
                <Button
                    type='button'
                    text='Log in'
                    className='open-other'
                />
            </div>
            <Button
                type='submit'
                text='Agree'
                className='form-button-agree'
            />
        </form>
    );
};

export default RegisterForm;