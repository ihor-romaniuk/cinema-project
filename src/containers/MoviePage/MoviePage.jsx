import React from "react";
import { connect } from "react-redux";

class MoviePage extends React.Component {
    state = {
        movie: null
    };

    componentDidMount() {
        const { match, movies } = this.props;
        const movieID = match.params.id;
        const movie = movies.find(item => item._id === movieID);

        this.setState({ movie })
    }

    render() {
        console.log(this.state.movie)
        return (
            <div>
                Movie page
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MoviePageContainer = connect(mapStateToProps)(MoviePage);
