import React, { useState } from "react";
import { connect } from "react-redux"
import Select from 'react-select'

import { MovieCard } from "../../components";
import "./MainPage.scss";

const MainPage = ({ movies, genres }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");
    const getFilteredMovies = (valueInput, valueSelect) =>  {
        return movies.reduce((acc, item) => {
            if (
                valueInput &&
                valueSelect &&
                item.genre &&
                item.genre.length
            ) {
                if (
                    item.genre.some(elem => elem.trim() === valueSelect) &&
                    item.title.toLowerCase().includes(valueInput.toLowerCase())
                ) {
                    acc.push(item);
                }
            } else if (
                valueInput &&
                !valueSelect &&
                item.title.toLowerCase().includes(valueInput.toLowerCase())
            ) {
                acc.push(item);
            } else if (
                !valueInput &&
                valueSelect &&
                item.genre &&
                item.genre.length &&
                item.genre.some(elem => elem.trim() === valueSelect)
            ) {
                acc.push(item);
            }

            return acc;
        }, []);
    };
    const handleChangeInput = (e) => {
        const { value } = e.target;

        setValueInput(value);
        setFilteredMovies(getFilteredMovies(value, valueSelect));
    };
    const handleChangeSelect = (e) => {
        const value = e ? e.value : "";

        setValueSelect(value);
        setFilteredMovies(getFilteredMovies(valueInput, value));

    };

    return (
       <React.Fragment>
           <div className="Filter">
               <h2 className="Filter-Title">Фильтрация:</h2>
               <span className="Filter-Subtitle">Имя</span>
               <input
                   type="text"
                   name="filter-name"
                   onChange={handleChangeInput}
                   value={valueInput}
                   placeholder="Название"
                   className="Filter-Input"
               />
               <span className="Filter-Subtitle">Жанр</span>
               <Select
                   isClearable
                   name="filter-select"
                   onChange={handleChangeSelect}
                   options={genres.map(item => ({ "value": item, "label": item }))}
               />
           </div>
           <div className="Movies-List">
               {
                   valueInput || valueSelect
                       ? filteredMovies.map(item => <MovieCard key={item._id} movie={item} />)
                       : movies.map(item => <MovieCard key={item._id} movie={item} />)
               }
           </div>
       </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);

