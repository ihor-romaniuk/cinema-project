import React from "react";
import  {  Switch,  Route } from 'react-router-dom';
import { connect } from "react-redux";

import { Main } from "../components/Main/Main";
import { MainPageContainer, MoviePageContainer, ScheduleContainer } from "../containers"
import  { getMovies } from "../actions";

class MainContent extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
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

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(null, mapDispatchToProps)(MainContent);


