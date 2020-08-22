import React, {useEffect, useState} from 'react';
import Title from "../elements/title";
import SecHeader from "../components/secHeader/secHeader";
import SortSideBar from "../components/sortSideBar/sortSideBar";
import CardsContainer from "../components/cardsContainer/cardsContainer";
import { store } from "../stores/rootModel";
import {observer} from "mobx-react";

const ByGenres = ({ match }) => {
    const [ count, setCount ] = useState(1);
    const { id } = match.params;
    const { byGenresMovies, getMoviesWithGenre, page, pagesTotal } = store.movies.byGenre;

    useEffect(()=> {
        getMoviesWithGenre(id, count)
    }, [id, count]);

    const increment =()=> {
        if (count !== pagesTotal) {
            setCount(count+1)
        }
    };

    const decrement =()=> {
        if (count !== 1) {
            setCount(count-1)
        }
    };

    return (
        <>
            <Title title={store.movies.getGenreName(id)}/>
            <SecHeader/>
            <div className='container flex'>
                <SortSideBar/>
                <CardsContainer
                    data={byGenresMovies}
                    {...{page}}
                    {...{pagesTotal}}
                    {...{increment}}
                    {...{decrement}}
                />
            </div>
        </>
    );
};

export default observer(ByGenres);