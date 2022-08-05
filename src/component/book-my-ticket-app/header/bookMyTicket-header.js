
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../../api/authentication-service';

const BookMyTicketHeader = () => {

    const [isUserLogged, setIsUerLogged] = useState(false);



    useEffect(() => {
        const checkUserLogin = () => {
            setIsUerLogged(authenticationService.isUserLoggedIn())
        }
        checkUserLogin()
    },[isUserLogged])

    const handleLogOut = () => {
        authenticationService.signOut();
        setIsUerLogged(authenticationService.isUserLoggedIn());
    }

        return (
            <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark banner-header">
                 <div className="container banner-name">
                    <Link className="navbar-brand brand-name" to={'/'} ><img className="brandImage" src="https://img.icons8.com/glyph-neue/2x/movie-projector.png" alt="brand"/>bookMyTicket</Link>
                     <input className='search-bar form-control' type='text' placeholder='Search For Movies, Events' />
                 </div>
                 <div className="collapse navbar-collapse login-header" id="collapsibleNavId">
                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                         {!isUserLogged && <li className="nav-item active">
                             <Link className="nav-link" to={'/sign-in'} >Sign In</Link>
                         </li>}
                         {!isUserLogged && <li className="nav-item">
                             <Link className="nav-link" to={'/sign-up'} >Sign Up</Link>
                         </li>}
                         {isUserLogged && <li className="nav-item active">
                             <Link className="nav-link" to={'/'} onClick={handleLogOut}>Sign Out</Link>
                         </li>}
                     </ul>
                 </div>
             </nav>
         </div>
        )
}

export default BookMyTicketHeader;