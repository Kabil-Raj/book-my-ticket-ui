import React, { Component } from 'react';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Event from '../events/event.component';
import Movie from '../movie/movie';
import ViewMovie from '../movie/view_movie/view.movie';
import Header from './header';
import Login from './login';
import MainHeader from './main.header';
import SignUp from './signup';

class BookMyTicketApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <MainHeader />
                    <Routes>
                        <Route path="/" element={<Header />}></Route>
                        <Route path="/sign-in" element={<Login />}></Route>
                        <Route path="/sign-up" element={<SignUp />}></Route>
                        <Route path="/explore/movies" element={<Movie />}></Route>
                        <Route path="/explore/events" element={<Event />}></Route>
                        <Route path="/view/movie/:movieId" element={<ViewMovie />}></Route>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default BookMyTicketApp;