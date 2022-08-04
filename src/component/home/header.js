import React, { Component } from "react";
import BannerSlider from "../banner-slider/banner.slider";
import NavigateHeader from "./navigate.header";
import movieService from "../authentication/movie.service";
import { MovieShowcase } from "../movie/movies.showcase";


class Header extends Component {


    constructor(props) {
        super(props)
        this.state = {
            trendingMovies: []
        }
    }

    componentDidMount() {
        movieService.getTrendingMovies()
            .then(response => {
                this.setState({
                    trendingMovies: response.data
                })
            })

    }


    render() {
        return (
            <div>
                <NavigateHeader />
                <BannerSlider />
                <div className="movie-genre-name">
                    <MovieShowcase movies={this.state.trendingMovies} />
                </div>
            </div>
        )
    }
}

export default Header;