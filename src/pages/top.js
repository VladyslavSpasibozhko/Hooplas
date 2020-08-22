import React, {useEffect, useState} from 'react';
import Title from "../elements/title";
import SecHeader from "../components/secHeader/secHeader";
import SortSideBar from "../components/sortSideBar/sortSideBar";
import CardsContainer from "../components/cardsContainer/cardsContainer";
import {store} from "../stores/rootModel";
import {observer} from "mobx-react";

const Top = () => {
    const { getTopRatedMovies, topRatedMovies, page, pagesTotal } = store.movies.topRated;
    const [ count, setCount ] = useState(1);

    const increment =()=> {
        if (count !== pagesTotal) {
            setCount(count+1)
        }
    };

    const decrement =()=> {
        if (count !== 1){
            setCount(count-1)
        }
    };

    useEffect(()=> {
        getTopRatedMovies(count)
    },[count]);

    return (
        <>
            <Title title='Top'/>
            <SecHeader/>
            <div className='container flex'>
                <SortSideBar/>
                <CardsContainer
                    data={topRatedMovies}
                    {...{page}}
                    {...{pagesTotal}}
                    {...{increment}}
                    {...{decrement}}
                />
            </div>
        </>
    );
};

export default observer(Top);