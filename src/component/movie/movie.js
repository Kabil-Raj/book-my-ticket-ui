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
        movieService.getMoviesByGenere()
            .then(response => {
                this.setState({
                    action : response.data
                })
            })
            movieService.getMoviesByGenere()
            .then(response => {
                this.setState({
                    drama : response.data
                })
            })
            movieService.getMoviesByGenere()
            .then(response => {
                this.setState({
                    sci : response.data
                })
            })
            movieService.getMoviesByGenere()
            .then(response => {
                this.setState({
                    romance : response.data
                })
            })
            movieService.getMoviesByGenere()
            .then(response => {
                this.setState({
                    adventure : response.data
                })
            })    
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

                    <MovieShowcase movies={this.state.drama} genreName={"Romance"} />
                </div>
                <div className="movie-genre-name">
                    <h2>Drama Movies</h2>

                    <MovieShowcase movies={this.state.romance} genreName={"Drama"} />
                </div>
                <div className="movie-genre-name">
                    <h2>Adventure Movies</h2>

                    <MovieShowcase movies={this.state.adventure} genreName={"Adventure"} />
                </div>
                <div className="movie-genre-name">
                    <h2>Sci-Fi Movies</h2>
                    <MovieShowcase movies={this.state.sci} genreName={"Scifi"} />
                </div>

            </div>
        )
    }
}