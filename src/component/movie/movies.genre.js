// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ViewMovie from './view_movie/view.movie';

// class MovieGenre extends Component {

//      sliders;
//      scrollAmount = 0;
//      scrollPerClick;
//      imagePadding = 20;


//     constructor(props) {
//         super(props)

//         this.state = {
//             displaySwitch: false
//         }

//         this.handleSwitchOnEnter = this.handleSwitchOnEnter.bind(this);
//         this.handleSwitchOnLeave = this.handleSwitchOnLeave.bind(this);

//     }

//     handleSwitchOnEnter() {
//         this.setState({
//             displaySwitch: true
//         })
//     }

//     handleSwitchOnLeave() {
//         this.setState({
//             displaySwitch: false
//         })
//     }

//     handlePrev = (e) => {
//         console.log(" checking " +e.target.parentElement.className)
//         // this.scrollPerClick = document.
//         // document.querySelector(".movie-template").clientWidth + this.imagePadding
//         // this.sliders = this.document.querySelector(".movie-genre-container")
//         console.log(" event  " +e.target)
//         console.log("clicked L start " + this.scrollAmount + " sw " + this.sliders.scrollWidth + " cw " + this.sliders.clientWidth + " sp " + this.scrollPerClick)

//         if (this.scrollAmount > 0) {
//             this.sliders.scrollTo({
//                 top: 0,
//                 left: (this.scrollAmount -= this.scrollPerClick),
//                 behavior: "smooth"

//             })
//         } else {
//             this.scrollAmount = 0
//         }
//         console.log("clicked L end " + this.scrollAmount + " sw " + this.sliders.scrollWidth + " cw " + this.sliders.clientWidth + " sp " + this.scrollPerClick)

//     }

//     handleNext = () => {
//         // this.scrollPerClick = this.document.querySelector(".movie-template").clientWidth + this.imagePadding
//         // this.sliders = this.document.querySelector(".movie-genre-container")
//         console.log("clicked R start " + this.scrollAmount + " sw " + this.sliders.scrollWidth + " cw " + this.sliders.clientWidth + " sp " + this.scrollPerClick)
//         if (this.scrollAmount <= this.sliders.scrollWidth) {
//             this.sliders.scrollTo({
//                 top: 0,
//                 left: (this.scrollAmount += this.scrollPerClick),
//                 behavior: "smooth"
//             })
//         } else {
//             this.scrollAmount = this.sliders.scrollWidth
//         }
//         console.log("clicked R end " + this.scrollAmount + " sw " + this.sliders.scrollWidth + " cw " + this.sliders.clientWidth + " sp " + this.scrollPerClick)

//     }

//     componentDidMount() {
//         this.scrollPerClick = document.querySelector(".movie-template").clientWidth + this.imagePadding
//         this.sliders = document.querySelector(".movie-genre-container")
//     }

//     render() {

//         const movies = [...this.props.movies]
//         return (
//             <div className="movie-genre-container-with-scroll" onPointerEnter={this.handleSwitchOnEnter} onPointerLeave={this.handleSwitchOnLeave}>
//                 <h2 >{this.props.genreName}</h2>
//                 <div className="movie-genre-container">
//                     <div className="movie-template">
//                         {movies.map(movie => {
//                             return <div className="movie-overall" key={movie.id}>
//                                 <Link to={"/view/movie/" + movie.id}>
//                                     <img src="../movimg.jpeg" alt={movie.name} />
//                                 </Link>
//                                 <div className='movie-information'>
//                                     <div className="movie-name-year">
//                                         <h3>{movie.name} <span> ({movie.year})</span></h3>
//                                     </div>
//                                     <div className="movie-rate">
//                                         <h3>{movie.rating}</h3>
//                                     </div>
//                                 </div>

//                                 <div className="movie-hover-overview">
//                                     <h3>Overview:</h3>
//                                     <p>{movie.description}</p>
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                 </div>
//                 { this.state.displaySwitch && <div className="movie-slider"> 
//                     <button className="prev slider" onClick={this.handlePrev}>{"<"}</button>
//                     <button className="next slider" onClick={this.handleNext}>{">"}</button>
//                 </div>}
//             </div>


//         );
//     }
// }

// export default MovieGenre;