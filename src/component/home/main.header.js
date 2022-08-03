import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import authenticationService from '../authentication/authentication.service';

 {/*function MainHeader() {

     const [isUserLogged, setIsUserLogged] = useState(false)

     const fetchData = async () => {
         const userStatus = authenticationService.isUserLoggedIn()
         console.log(" fetch data " + userStatus)
         setIsUserLogged(userStatus)
     }

     useEffect(() => {
         fetchData()
     }, [isUserLogged])

     const handleLogOut = () => {
         authenticationService.signOut();
         setIsUserLogged(authenticationService.isUserLoggedIn())
     }
     return (
         <div>
             {console.log(" check 50 " +authenticationService.isUserLoggedIn())}
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark banner-header">
                 <div className="container">
                     <Link className="navbar-brand brand-name" to={'/'} >bookMyTicket</Link>
                     <input className='search-bar form-control' type='text' placeholder='Search For Movies, Events' />
                 </div>
                 <div className="collapse navbar-collapse" id="collapsibleNavId">
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
     );
 } */}

class MainHeader extends Component{

    constructor(props) {
        super(props)

        this.state = {
            isUserLogged : false
        }
    }

    // componentDidMount() {
    //     // this.setState({
    //     //     isUserLogged : authenticationService.isUserLoggedIn()
    //     // })
    // }

    handleLogOut = () => {
        authenticationService.signOut();
    }

    render() {

        this.setState ({
            isUserLogged : authenticationService.isUserLoggedIn()
        })

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