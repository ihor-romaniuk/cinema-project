import React from "react";
import { connect } from "react-redux";

import { MovieInfoBlock, Poster} from "../../components";
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

    getInfoByArr = (arr) => {
        if (arr[arr.length - 1]) {
            return arr.join(", ");
        } else {
            return arr.join(", ").slice(0, 2);
        }
    };

    render() {
        const { movie } = this.state;
        const actors =  movie.actors ? this.getInfoByArr(movie.actors) : "";
        const genres =  movie.genre ? this.getInfoByArr(movie.genre) : "";
        const countries =  movie.country ? this.getInfoByArr(movie.country) : "";

        return (
            <div className="MovieItem">
                <Poster poster={movie.poster} title={movie.title} />
                <div className="MovieItem-Info">
                    <h1 className="MovieItem-Title">{movie.title}</h1>
                    <div className="MovieItem-Description">{movie.description}</div>

                    <MovieInfoBlock title="В ролях" text={actors}/>
                    <MovieInfoBlock title="Возвраст" text={movie.age}/>
                    <MovieInfoBlock title="Страна" text={countries}/>
                    <MovieInfoBlock title="Жанр" text={genres}/>
                    <MovieInfoBlock title="Язык озвучки" text={movie.language}/>
                    <MovieInfoBlock title="Длительность" text={movie.long}/>
                    <MovieInfoBlock title="Трейлер" text={
                        <iframe
                            title={movie.title}
                            className="MovieItem-Trailer"
                            frameBorder="0"
                            seamless
                            width="420"
                            height="450"
                            src={movie.trailer}>
                        </iframe>
                    }/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);
