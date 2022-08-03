import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom';
import movieService from '../../authentication/movie.service';
import authenticationService from '../../authentication/authentication.service';


function ViewMovie() {

    const ticketAmount = 180

    const { movieId } = useParams();
    
    const [movie, setMovie] = useState([]);

    const [ticketCount, setTicketCount] = useState(1);

    const [ticketPrice, setTicketPrice] = useState(ticketAmount);

    const curentPath = useLocation();

    const navigateToLoginPage = useNavigate();


    useEffect(() => {
        movieService.getMovieById(movieId)
            .then(movResponse => {
                setMovie(movResponse.data)
            })
    })

    function increment () {
        setTicketCount(ticketCount + 1)
        setTicketPrice(ticketPrice + ticketAmount);
    }

    function decrement () {
        if ( ticketCount > 0 ) {
            setTicketCount ( ticketCount -1)
            setTicketPrice(ticketPrice - ticketAmount);
        }
    }


    function bookTicket() {
        if (authenticationService.isUserLoggedIn()) {
            console.log(" pay the amount ")
        } else {
            navigateToLoginPage("/sign-in", {state : {from : curentPath.pathname}})
        }
        
    }

    

    return (
        <div className="view-movie">
            <div className="movie-banner">
                <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" alt={movie.name} />
                <div className="movie-banner-info">
                    <h2>{movie.name}</h2>
                    <h3><span>Genre: </span>{movie.genre}</h3>
                    <h3><span>Rating: </span>{movie.rating} <span>Year: </span> {movie.year}</h3>
                    <div className="book-ticket">
                        <button >Book Ticket</button>
                    </div>
                    <div className="ticket-count">
                        <h3> <button disabled={ticketCount === 1} onClick={decrement}>-</button> <input  value={ticketCount} readOnly={true}  type="text"  /> <button onClick={increment}>+</button> </h3> 
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
    );
}

export default ViewMovie;