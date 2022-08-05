
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../../api/authentication-service';
import "./header.css"

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
             <nav className="header-container">
                 <div className="header-brand">
                    <Link className="header-brand-name" to={'/'} ><img className="brandImage" src="https://img.icons8.com/glyph-neue/2x/movie-projector.png" alt="brand"/>bookMyTicket</Link>
                     <input className="header-brand-searchbar" type='text' placeholder='Search For Movies, Events' />
                 </div>
                 <div className="header-login-signup">
                     <ul className="header-nav">
                         {!isUserLogged && <li className="">
                             <Link className="header-nav-item" to={'/sign-in'} >Log in</Link>
                         </li>}
                         {!isUserLogged && <li className="">
                             <Link className="header-nav-item" to={'/sign-up'} >Register</Link>
                         </li>}
                         {isUserLogged && <li className="">
                             <Link className="header-nav-item" to={'/'} onClick={handleLogOut}>Log out</Link>
                         </li>}
                     </ul>
                 </div>
             </nav>
         </div>
        )
}

export default BookMyTicketHeader;