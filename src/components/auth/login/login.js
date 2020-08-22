import React, { useContext } from 'react';
import LoginForm from "./loginForm";
import { Context } from "../../header/header";
import { store } from "../../../stores/rootModel";


const Login = () => {
    const context = useContext(Context);

    const onSubmit = async (values)=> {
        await store.auth.loginReq(values);

        if (store.auth.isLoggedIn){
            context.hideLoginForm()
        }
    };

    return (
        <div className='form-container'>
            <LoginForm {...{onSubmit}} {...{context}}/>
        </div>
    );
};

export default Login;