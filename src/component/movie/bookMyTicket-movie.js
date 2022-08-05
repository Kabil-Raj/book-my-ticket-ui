import React, { Component } from "react";
import movieService from "../api/movie-service";
import { MovieShowcase } from "./movie-showcase/movies.showcase";
import "./bookMyTicket-movie.css"

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

            <>
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

            </>
        )
    }
}