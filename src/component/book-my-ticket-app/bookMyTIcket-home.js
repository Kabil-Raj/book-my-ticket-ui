import React, { Component } from "react";
import BannerSlider from "../promotion-slider/promotion.slider";
import NavigateHeader from "./nav-folder/nav-header";
import movieService from "../api/movie-service";
import { MovieShowcase } from "../movie/movie-showcase/movies.showcase";


class Home extends Component {


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

export default Home;