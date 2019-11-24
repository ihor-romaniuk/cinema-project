import React from "react";
import { connect } from "react-redux"

import { MovieCard } from "../../components";
import "./MainPage.scss";

const MainPage = ({ movies }) => (
    <div className="Movies-List">
        {movies.map(item => <MovieCard key={item._id} movie={item} />)}
    </div>
);

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);

