import React from "react";
import { connect } from "react-redux";

import { MovieInfoBlock } from "../../components";
import "./MoviePage.scss";

class MoviePage extends React.Component {
    state = {
        movie: {}
    };

    componentDidMount() {
        const { match, movies } = this.props;
        const movieID = match.params.id;
        const movie = movies.find(item => item._id === movieID);

        this.setState({ movie });
    }

    render() {
        const { movie } = this.state;
        const actors =  movie.actors ? movie.actors.filter(item => item != "").join(", ") : "";
        const genres =  movie.genre ? movie.genre.filter(item => item != "").join(", ") : "";
        const countries =  movie.country ? movie.country.filter(item => item != "").join(", ") : "";

        return (
            <div className="MovieItem">
                <div className="Movie-Col_left">
                    <figure className="Movie-PosterWrapper">
                        <img
                            src={movie.poster}
                            className="Movie-Poster"
                            alt={movie.title}
                        />
                    </figure>
                    <button className="Movie-BuyBtn">Заказать билет</button>
                </div>

                <div className="Movie-Col_right">
                    <h1 className="MovieItem-Title">{movie.title}</h1>
                    <div className="MovieItem-Description">{movie.description}</div>

                    <MovieInfoBlock title="В ролях" text={actors}/>
                    <MovieInfoBlock title="Возвраст" text={movie.age}/>
                    <MovieInfoBlock title="Страна" text={countries}/>
                    <MovieInfoBlock title="Жанр" text={genres}/>
                    <MovieInfoBlock title="Язык озвучки" text={movie.language}/>
                    <MovieInfoBlock title="Длительность" text={movie.long}/>

                    {
                        movie.trailer && <iframe
                            className="MovieItem-Trailer"
                            frameborder="0"
                            seamless
                            width="420"
                            height="450"
                            src={movie.trailer}>
                        </iframe>
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);
