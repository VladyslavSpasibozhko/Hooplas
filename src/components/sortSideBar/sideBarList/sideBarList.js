import React, {useState, useEffect } from 'react';
import SideBarListItem from "./sideBarListItem";
import { store } from "../../../stores/rootModel";
import {observer} from "mobx-react";


const SideBarList = () => {
    const { genres, getGenres } = store.movies;
    const [open, setOpen] = useState(false);
    const showItem =()=> setOpen(!open);

    useEffect(()=> {
        if (!genres[0]){
            getGenres()
        }
    }, []);

    return (
        <div className='side-bar-block-container'>
            <div
                onClick={showItem}
                className={`side-bar-title ${open ? 'open' : ''}`}>
                Genres
            </div>
            <ul className='side-bar-block-inner-container'>
                {
                    genres.map(item => (
                        <SideBarListItem
                            key={item.id}
                            {...{item}}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default observer(SideBarList);