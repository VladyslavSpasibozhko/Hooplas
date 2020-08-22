import React, { useContext } from 'react';
import RegisterForm from "./registerForm";
import {store} from "../../../stores/rootModel";
import { Context } from "../../header/header";

const Register = () => {
    const context = useContext(Context);

    const onSubmit = async (values)=> {
      await store.auth.registerReq(values);
        if (store.auth.isLoggedIn){
            context.hideRegisterForm()
        }
    };

    return (
        <div className='form-container'>
            <RegisterForm {...{context}} {...{onSubmit}}/>
        </div>
    );
};

export default Register;