import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({title, year, summary, poster,genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movi_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="moive_year">{year}</h5>
            <p className="movie_summary">{summary}</p>
            <ul className="movie_genres">
                {genres.map((genre,idx)=>(
                    <li key={idx} className="genres_genre">{genre}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}

Movie.prototype = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;