import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookMyTicketEvents from '../events/bookMyTicket-events';
import Movie from '../movie/bookMyTicket-movie';
import ViewMovie from '../movie/view-movie-details/view.movie-details';
import Home from './bookMyTIcket-home';
import BookMyTicketHeader from './header/bookMyTicket-header';
import Login from './login-signup-form/login';
import SignUp from './login-signup-form/signup';

class BookMyTicketApp extends Component {
    render() {
        return (
            <Router>
                <BookMyTicketHeader />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/sign-in" element={<Login />}></Route>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                    <Route path="/explore/movies" element={<Movie />}></Route>
                    <Route path="/explore/events" element={<BookMyTicketEvents />}></Route>
                    <Route path="/view/movie/:movieId" element={<ViewMovie />}></Route>
                </Routes>
            </Router>
        );
    }
}

export default BookMyTicketApp;