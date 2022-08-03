import React, { Component,useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import authenticationService from './component/authentication/authentication.service';
import Event from './component/events/event.component';
import BookMyTicketApp from './component/home/bookMyTicketApp';
import Header from './component/home/header';
import Login from './component/home/login';
import MainHeader from './component/home/main.header';
import SignUp from './component/home/signup';
import Movie from './component/movie/movie';
import ViewMovie from './component/movie/view_movie/view.movie';




export default function App()  {

    return (
      <div className='App'>
        <BookMyTicketApp />
      </div>
    );

}
