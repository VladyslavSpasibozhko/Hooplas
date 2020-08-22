import React from 'react';
import Button from "../../../elements/button";
import { store } from "../../../stores/rootModel";
import { observer } from "mobx-react";

const LogOut = () => {

    const logOut =()=> store.auth.logOut();

    return (
        <div className='user-info-container flex align-center'>
            <span className='icon far fa-user-circle'></span>
            <span className='name'>{store.auth.viewer.get_user()}</span>
            <Button
                onClick={logOut}
                className='log_out'
                text='Log out'
            />
        </div>
    );
};

export default observer(LogOut);