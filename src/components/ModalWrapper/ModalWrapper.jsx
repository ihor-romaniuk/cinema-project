import React from "react";
import axios from "axios";

import "./ModalWrapper.scss";
import { URL_SPACE_SHADOW } from "../../constants";
import { getSortedPlaces, getRowsArr, getRandomInt } from "../../utils"
import { Spinner, ModalContent } from "../../components";

export class ModalWrapper extends React.Component {
    state = {
        isLoading: true,
        space: [],
        chosenPlace: null,
        showForm: false,
        use: null
    };

    componentDidMount() {
        axios.get(`${URL_SPACE_SHADOW}?session=${this.props.session._id}`)
            .then(({ data }) => {
                this.setLoadingDone();
                this.getPlaceArr(data.space);
            })
            .catch(error => {
                console.log(error)
            })
    }

    setLoadingDone = () => this.setState({isLoading: false});

    getPlaceArr = (arr) => {
        const sortedByRow = getSortedPlaces(arr, "row");
        const rows = getRowsArr(sortedByRow);
        const rowsSortedByPlace = rows.map(item => getSortedPlaces(item, "place"));

        this.setState({
            space: rowsSortedByPlace.map(item => {
                const random = getRandomInt(2, 6);

                return item.map(elem => {
                    if (elem.place % random === 0) {
                        return {
                            ...elem,
                            booked: true
                        }
                    }
                    return elem;
                })
            })
        });
    };

    handleChosePlace = (data) => {
        this.setState({ chosenPlace: data })
    };

    handleOpenForm = () => {
        this.setState({ showForm: true })
    };

    handleClickBuy = (data) => {
        this.setState({user: data})
    };

    render() {
        const { isLoading, space, chosenPlace, showForm, user } = this.state;
        const { session, handleCLoseModal } = this.props;

        return (
            <div className="Modal">
                <div className="Modal-Content">
                    {
                        isLoading
                            ? <Spinner />
                            : <ModalContent
                                user={user}
                                chosenPlace={chosenPlace}
                                handleCLoseModal={handleCLoseModal}
                                session={session}
                                showForm={showForm}
                                space={space}
                                handleChosePlace={this.handleChosePlace}
                                handleClickBuy={this.handleClickBuy}
                                handleOpenForm={this.handleOpenForm}
                            />
                    }
                </div>
            </div>
        )
    }
}
