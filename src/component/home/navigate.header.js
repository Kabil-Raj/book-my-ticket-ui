import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Movie from '../movie/movie';
import Event from '../events/event.component';

export default class NavigateHeader extends Component {
    render() {
        return (
            <nav className="nav-header navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className='nav-link nav-header-name' to={'/explore/movies'} >Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link nav-header-name' to={'/explore/events'} >Events</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}