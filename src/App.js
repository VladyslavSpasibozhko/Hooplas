import React, { useEffect } from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/header";
import Navigate from "./routes/navigate";
import Footer from "./components/footer/footer";
import { pathData } from "./routes/routesPath";
import {auth} from "./components/auth/auth";
import {store} from "./stores/rootModel";

import 'normalize.css'
import './styles/style.css'

const App = () => {

    useEffect(()=> {
        const token = auth.getTokenFromStorage();
        if (token){
            store.auth.getUser()
        }
    }, []);

    return (
        <BrowserRouter>
            <Header/>
            <Navigate data={pathData}/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;