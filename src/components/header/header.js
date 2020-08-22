import React, { useState } from 'react';
import Logo from "../logo/logo";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import HeaderAuthButton from "./headerComponent/headerAuthButtons";
import { observer } from "mobx-react";
import './header.css';
import SearchBlock from "./headerComponent/searchBlock";

const selectData = [
    {
        text:'Everything',
        value:'everything'
    },
    {
        text:'Movies',
        value:'movies'
    },
    {
        text:'Companies',
        value:'companies'
    },
    {
        text:'TV shows',
        value:'tv_shows'
    },
];

export const Context = React.createContext();

const Header = () => {
    const [login , setLogin ] = useState(false);
    const [register , setRegister ] = useState(false);

    const showLoginForm =()=> setLogin(!login);
    const showRegisterForm =()=> setRegister(!register);
    const hideLoginForm =()=> setLogin(false);
    const hideRegisterForm =()=> setRegister(false);

    const value = {
        showLoginForm,
        showRegisterForm,
        hideLoginForm,
        hideRegisterForm
    };

    return (
        <Context.Provider value={value}>
            <div className='header-container paddingX_10px'>
                <div className='container flex space-between align-center'>
                    <Logo/>
                    <SearchBlock/>
                    <HeaderAuthButton
                        {...{showLoginForm}}
                        {...{showRegisterForm}}/>
                </div>
                {
                    login ? <Login/> : null
                }
                {
                    register ? <Register/> : null
                }
            </div>
        </Context.Provider>
    );
};

export default observer(Header);

