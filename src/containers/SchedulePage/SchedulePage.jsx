import React from "react";
import { connect } from "react-redux";

import { getSessions } from "../../actions"
import { SessionsBlock } from "../../components";
import { dateOptions } from "../../constants";
import "./SchedulePage.scss";

export class Schedule extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }

    getSessions = () => {
        const { movies, sessions, rooms } = this.props;
        const sessionsArr = movies.length && sessions.length && rooms.length
            ? sessions.map(item => {
                return item.map(elem => ({
                    ...elem,
                    room: rooms.find(room => room._id === elem.room).name,
                    movies: movies.find(movie => movie._id === elem.movie)
                }));
            })
            : [];

        return sessionsArr.map(item => item.filter(elem => elem.movie));
    };

    render() {
        return (
            <div className="Schedule">
                {
                    this.getSessions().map((item, i) => (
                        <div className="Schedule-Block" key={i}>
                            <h3 className="Schedule-Title">{new Date(item[0].date).toLocaleString("ru", dateOptions)}</h3>
                            <SessionsBlock moviesOnDate={item}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sessions: state.data.sessions,
    movies: state.data.movies,
    rooms: state.data.rooms
});

const mapDispatchToProps = {
    getSessions
};

export const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);
