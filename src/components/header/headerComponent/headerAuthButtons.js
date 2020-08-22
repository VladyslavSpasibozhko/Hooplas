import React from 'react';
import Button from "../../../elements/button";
import LogOut from "./logOut";
import {store} from "../../../stores/rootModel";
import {observer} from "mobx-react";

const HeaderAuthButtons = ({ showLoginForm, showRegisterForm}) => {
    return (
        <div
            className='flex flex25 justify-end align-center'>
            {
                store.auth.isLoggedIn
                    ? <LogOut/>
                    : (
                        <>
                            <Button
                                text='Log in'
                                className='log_in'
                                onClick={showLoginForm}
                            />
                            <Button
                                text='Sign Up'
                                className='sign_up'
                                onClick={showRegisterForm}
                            />
                        </>
                    )
            }
        </div>
    );
};

export default observer(HeaderAuthButtons);