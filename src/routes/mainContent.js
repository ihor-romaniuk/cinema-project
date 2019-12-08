import React from "react";
import { Switch,  Route } from 'react-router-dom';
import { connect } from "react-redux";

import { getMovies } from "../actions";
import { Spinner, Main } from "../components";
import { MainPageContainer, MoviePageContainer, ScheduleContainer } from "../containers"

class MainContent extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const { isLoading } = this.props;

        if(isLoading) {
            return <Spinner/>
        }

        return (
            <Main>
                <Switch>
                    <Route exact path="/" component={MainPageContainer} />
                    <Route path="/movie/:id" component={MoviePageContainer} />
                    <Route path="/schedule" component={ScheduleContainer} />
                </Switch>
            </Main>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading
});

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);


