import React from 'react';
import { Link } from "react-router-dom";
import {observer} from "mobx-react";

const SideBarListItem = ({ item }) => {
    return (
        <Link to={{
            pathname:`/movies/genre/${item.id}`
        }}>
            <li className='side-bar-item'>
                {item.name}
            </li>
        </Link>
    );
};

export default observer(SideBarListItem);