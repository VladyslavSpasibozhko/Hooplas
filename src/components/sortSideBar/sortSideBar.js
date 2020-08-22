import React from 'react';
import { useHistory } from 'react-router-dom';
import SideBarList from "./sideBarList/sideBarList";
import SideBarTitleItem from "./sideBarTitleItem";
import './sortSideBar.css'


const SortSideBar = () => {
    const history = useHistory();

    return (
        <div className='side-bar-container'>
            <SideBarList/>
            <SideBarTitleItem
                title='Popular'
                onClick={()=> history.push('/movies/popular')}
            />
            <SideBarTitleItem
                title='Top Rating'
                onClick={()=> history.push('/movies/top')}
            />
        </div>
    );
};

export default SortSideBar;