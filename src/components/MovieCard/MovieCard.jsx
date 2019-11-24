import React from 'react';
import { Link } from "react-router-dom";

import "./MovieCard.scss";

export const MovieCard = ({ movie }) => (
    <Link to={`movie/${movie._id}`} className="Movie-Card">
        <figure className="Movie-PosterWrapper">
            <img src={movie.poster} alt={movie.title} className="Movie-Poster" />
            <div className="Movie-Title">{movie.title}</div>
        </figure>
    </Link>
);
