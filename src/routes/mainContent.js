import React from "react";
import  {  Switch,  Route } from 'react-router-dom';
import { connect } from "react-redux";

import { Main } from "../components/Main/Main";
import { MainPageContainer, MoviePageContainer } from "../containers"
import  { getMovies } from "../actions";
import { Spinner } from "../components";


class MainContent extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const { isLoading } = this.props;

        return (
            <Main>
                {isLoading
                    ? <Spinner/>
                    : (
                        <Switch>
                            <Route exact path="/" component={MainPageContainer} />
                            <Route path="/movie/:id" component={MoviePageContainer} />
                        </Switch>
                    )
                }
            </Main>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading:  state.loading.isLoading
});

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);


