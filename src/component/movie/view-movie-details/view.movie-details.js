import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import authenticationService from '../../api/authentication-service';
import movieService from '../../api/movie-service';
import { BookedPopUp } from './movie-booked-popup';
import "./view-movie-details.css"


function ViewMovie() {

    const ticketAmount = 180

    const { movieId } = useParams();

    const [movie, setMovie] = useState([]);

    const [ticketCount, setTicketCount] = useState(1);

    const [ticketPrice, setTicketPrice] = useState(ticketAmount);

    const curentPath = useLocation();

    const [opacity, setOpacity] = useState(1)

    const navigateToLoginPage = useNavigate();

    const [togglePopUp, setTogglePopUp] = useState(false)

    const [movieBookedDescription, setMovieBookedDescription] = useState('')

    const navigate = useNavigate();


    useEffect(() => {
        movieService.getMovieById(movieId)
            .then(movResponse => {
                setMovie(movResponse.data)
            })
    })

    function increment() {
        setTicketCount(ticketCount + 1)
        setTicketPrice(ticketPrice + ticketAmount);
    }

    function decrement() {
        if (ticketCount > 0) {
            setTicketCount(ticketCount - 1)
            setTicketPrice(ticketPrice - ticketAmount);
        }
    }


    function bookTicket() {
        if (authenticationService.isUserLoggedIn()) {
            setOpacity(0.3)
            setTogglePopUp(true)
            authenticationService.bookTicket(movie.name,ticketCount)
                .then(response => {
                    setMovieBookedDescription(response.data)
                })


        } else {
            navigateToLoginPage("/sign-in", {state : {from : curentPath.pathname}})
        }

    }

    const navigateToHomePage = () => {
        setTogglePopUp(false)
        navigate("/")
    }



    return (
        <>
            <div className="view-movie" style={{opacity}} >
                <div className="movie-banner">
                    <img src={movie.image} alt={movie.name} />
                    <div className="movie-banner-info">
                        <h2>{movie.name}</h2>
                        <h3><span>Genre: </span>{movie.genre}</h3>
                        <h3><span>Rating: </span>{movie.rating} <span>Year: </span> {movie.year}</h3>
                        <div className="book-ticket">
                            <button >Book Ticket</button>
                        </div>
                        <div className="ticket-count">
                            <h3> <button disabled={ticketCount === 1} onClick={decrement}>-</button> <input value={ticketCount} readOnly={true} type="text" /> <button onClick={increment}>+</button> </h3>
                        </div>
                        <div className="pay-ticket" >
                            <button onClick={bookTicket}>Pay {ticketPrice}</button>
                        </div>
                    </div>
                </div>

                <div className="movie-overview-info">
                    <h2>About the movie </h2>
                    <p>{movie.description}</p>
                </div>
            </div>
            <BookedPopUp open={togglePopUp} description={movieBookedDescription} onClose={navigateToHomePage} />

        </>

    );
}

export default ViewMovie;