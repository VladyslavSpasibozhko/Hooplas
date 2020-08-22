import React from 'react';
import {Link} from "react-router-dom";

export const slidesArray =(data)=> (
    data.map(item => (
        <Link
            key={item.id}
            to={{
                pathname:'/'
            }}
        >
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="image"/>
            <p>{item.original_title}</p>
        </Link>
    ))
)

