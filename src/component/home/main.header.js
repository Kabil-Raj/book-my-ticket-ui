import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../authentication/authentication.service';

class MainHeader extends Component{

    constructor(props) {
        super(props)

        this.state = {
            isUserLogged : false
        }
    }

    handleLogOut = () => {
        authenticationService.signOut();
    }

    render() {

        this.setState ({
            isUserLogged : authenticationService.isUserLoggedIn()
        },[this.state.isUserLogged])

        return (
            <div>
                        

             <nav className="navbar navbar-expand-lg navbar-dark bg-dark banner-header">
                 <div className="container">
                     <Link className="navbar-brand brand-name" to={'/'} >bookMyTicket</Link>
                     <input className='search-bar form-control' type='text' placeholder='Search For Movies, Events' />
                 </div>
                 <div className="collapse navbar-collapse" id="collapsibleNavId">
                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                         {!this.state.isUserLogged && <li className="nav-item active">
                             <Link className="nav-link" to={'/sign-in'} >Sign In</Link>
                         </li>}
                         {!this.state.isUserLogged && <li className="nav-item">
                             <Link className="nav-link" to={'/sign-up'} >Sign Up</Link>
                         </li>}
                         {this.state.isUserLogged && <li className="nav-item active">
                             <Link className="nav-link" to={'/'} onClick={this.handleLogOut}>Sign Out</Link>
                         </li>}
                     </ul>
                 </div>
             </nav>
         </div>
        )
    }
}

export default MainHeader;