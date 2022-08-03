import React, { Component } from "react";
import BannerSlider from "../banner-slider/banner.slider";
import authenticationService from "../authentication/authentication.service";
import NavigateHeader from "./navigate.header";
import movieService from "../authentication/movie.service";
import { MovieShowcase } from "../movie/movies.showcase";


const test = true;



class Header extends Component {


    constructor(props) {
        super(props)

        this.state = {
            trendingMovies: [],
            displayBanner: true,
            isUserLogged: false
        }
    }

    componentDidMount() {
        movieService.getTrendingMovies()
            .then(response => {
                this.setState({
                    trendingMovies: response.data,
                    isUserLogged: authenticationService.isUserLoggedIn()
                })
            })

    }

    toggleBannerOn = () => {
        this.setState({
            displayBanner: true
        })
    }


    toggleBannerOff = () => {
        console.log(" called from movie service")
        this.setState({
            displayBanner: false,
            isUserLogged: authenticationService.checkUserLogIn()
        })
    }

    handleLogOut = () => {
        authenticationService.signOut();
        this.setState({
            isUserLogged: authenticationService.checkUserLogIn()
        })
        this.toggleBannerOn()
    }


    render() {
        return (
            <div>
                <div>
                    <NavigateHeader />
                    <BannerSlider />
                    {/* <MovieDisplayTemplate movies={this.state.trendingMovies} /> */}
                    <MovieShowcase movies={this.state.trendingMovies} />
                </div>
                {/* } */}
            </div>
        )
    }
}

export default Header;