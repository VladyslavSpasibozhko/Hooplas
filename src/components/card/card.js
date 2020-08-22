import React from 'react';
import { Link } from "react-router-dom";
import img from '../../images/2.jpg';
import './card.css';

const Card = ({ item }) => {
    return (
        <div className='card-container'>
            <Link to={{
                pathname:`/movie/${item.id}`
            }}>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="image"/>
                <p className='item-icon'>Movie</p>
                <p className='title'>{item.title}</p>
                <p className='mark'>Release date:{item.release_date}</p>
            </Link>
        </div>
    );
};

export default Card;