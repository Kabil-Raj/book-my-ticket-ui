import React, { Component } from "react";
import movieService from "../authentication/movie.service";
import { MovieShowcase } from "./movies.showcase";

export default class Movie extends Component {

    movieGenre = ["action", "romance", "drama", "sci", "adventure"]

    constructor(props) {
        super(props)
        this.state = {
            action: [],
            drama: [],
            sci: [],
            romance: [],
            adventure: []
        }
    }

    componentDidMount() {
        this.movieGenre.forEach(element => {
            movieService.getMoviesByGenere(element)
                .then(response => {
                    if (element === "action") {
                        this.setState({
                            action: response.data
                        })
                    } else if (element === "romance") {
                        this.setState({
                            romance: response.data
                        })
                    } else if (element === "sci") {
                        this.setState({
                            sci: response.data
                        })
                    } else if (element === "adventure") {
                        this.setState({
                            adventure: response.data
                        })
                    } else if (element === "drama") {
                        this.setState({
                            drama: response.data
                        })
                    }
                })
        });


    }

    render() {
        return (

            <div className="all-movie">
                <div className="movie-genre-name">
                    <h2>Action Movies</h2>
                    <MovieShowcase movies={this.state.action} genreName={"Action"} />
                </div>
                <div className="movie-genre-name">
                    <h2>Romance Movies</h2>

                    <MovieShowcase movies={this.state.action} genreName={"Romance"} />
                </div>
                <div className="movie-genre-name">
                    <h2>Drama Movies</h2>

                    <MovieShowcase movies={this.state.action} genreName={"Drama"} />
                </div>
                <div className="movie-genre-name">
                    <h2>Adventure Movies</h2>

                    <MovieShowcase movies={this.state.action} genreName={"Adventure"} />
                </div>
                <div className="movie-genre-name">
                    <h2>Sci-Fi Movies</h2>

                    <MovieShowcase movies={this.state.action} genreName={"Scifi"} />
                </div>

            </div>
        )
    }
}