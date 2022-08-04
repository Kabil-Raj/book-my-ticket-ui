import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

 export const  MovieShowcase = (props) =>  {

    let [sliderSwitch, setSliderSwitch] = useState(false)

    let [sliderNumber, setSliderNumber] = useState(0)

    const [ movies, setMovies ] = useState([])

    const movieContainer = useRef();

    const handleSwitchOnEnter = () => {
        setSliderSwitch(true)
    }

    const handleSwitchOnLeave = () => {
        setSliderSwitch(false)
    }

    const handleSlide = (directiom) => {
        let distance = movieContainer.current.getBoundingClientRect().x

        if (directiom === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber -= 1)
            movieContainer.current.style.transform = `translateX(${230 + distance}px)`
        }


        if (movies.length <= 8) {
            if (directiom === "right" && sliderNumber < 2) {
                setSliderNumber(sliderNumber += 1)
                movieContainer.current.style.transform = `translateX(${-230 + distance}px)`
            }
        }
        if (movies.length > 8) {
            if (directiom === "right" && sliderNumber < 6) {
                setSliderNumber(sliderNumber += 1)
                movieContainer.current.style.transform = `translateX(${-230 + distance}px)`
            }
        }
    }

    

      useEffect(() => {
        const assignMovie = () => {
            setMovies(props.movies)
        }
        assignMovie()
     })

    return (
        <div className="movie-genre-container-with-scroll" onPointerEnter={handleSwitchOnEnter} onPointerLeave={handleSwitchOnLeave}>
            <div className="movie-genre-container" ref={movieContainer} >
                <div className="movie-template" >
                     {movies.map(movie => {
                        return <div className="movie-overall" key={movie.id}>
                            <Link to={"/view/movie/" + movie.id}>
                                <img src={movie.image} alt={movie.name} />
                            </Link>
                            <div className='movie-information'>
                                <div className="movie-name-year">
                                    <h3>{movie.name} <span> ({movie.year})</span></h3>
                                </div>
                                <div className="movie-rate">
                                    <h3>{movie.rating}</h3>
                                </div>
                            </div>

                            <div className="movie-hover-overview">
                                <h3>Overview:</h3>
                                <p>{movie.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            {sliderSwitch && <div className="movie-slider">
                <button className="prev slider" onClick={() => handleSlide("left")} >{"<"}</button>
                <button className="next slider" onClick={() => handleSlide("right")}>{">"}</button>
            </div>}
        </div>


    );
}
