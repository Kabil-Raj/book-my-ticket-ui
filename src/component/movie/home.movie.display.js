// import React, { Component } from "react";
// import { Carousel } from "react-bootstrap";

// var switchButton = false;




// class MovieDisplayTemplate extends Component {


//     sliders;
//     scrollAmount = 0;
//     scrollPerClick;
//     imagePadding = 1;



//     constructor(props) {
//         super(props)
//         this.state = {
//             toggleSwitchButton: false
//         }

//         this.handleSwitchButtonOnEnter = this.handleSwitchButtonOnEnter.bind(this)
//         this.handleSwitchButtonOnLeave = this.handleSwitchButtonOnLeave.bind(this)
//         this.handleScrollLeft = this.handleScrollLeft.bind(this);
//         this.handleScrollRight = this.handleScrollRight.bind(this);

//     }


//     handleSwitchButtonOnEnter() {
//         this.setState({
//             toggleSwitchButton: true
//         })
//     }

//     handleSwitchButtonOnLeave() {
//         this.setState({
//             toggleSwitchButton: false
//         })
//     }

//     handleScrollLeft() {
//         if ( this.scrollAmount > 0 ) {
//             this.sliders.scrollTo({
//                 top: 0,
//                 left: (this.scrollAmount -= this.scrollPerClick),
//                 behavior: "smooth"
    
//             })
//         } 
//         else 
//         {
//             this.scrollAmount = this.sliders.clientWidth
//             this.sliders.scrollTo({
//                 top: 0,
//                 left: (this.scrollAmount += this.scrollPerClick),
//                 behavior: "smooth"
    
//             })
//         }
//     }

//     handleScrollRight() {
//         if ( this.scrollAmount <= this.sliders.scrollWidth - this.sliders.clientWidth) {
//             this.sliders.scrollTo({
//                 top: 0,
//                 left: (this.scrollAmount += this.scrollPerClick),
//                 behavior: "smooth"
//             })
//         } 
//         else {
//             this.scrollAmount = 0;
//             this.sliders.scrollTo({
//                 top: 0,
//                 left: (this.scrollAmount),
//                 behavior: "smooth"
//             })
//         }
//     }

//     componentDidMount() {
//         this.scrollPerClick = document.querySelector(".movie-container").clientWidth + this.imagePadding
//         this.sliders = document.querySelector(".movie-container")
//     }

//     render() {
//          const movies = [...this.props.movies]
//         return (
//             <div>
//                  <div className="movie-container" onPointerEnter={this.handleSwitchButtonOnLeave} onPointerLeave={this.handleSwitchButtonOnEnter}> 
//                     {movies.map((movie) => { 
//                         return <div className="movie" key={movie.id}>
//                             <img src="../movimg.jpeg" />
//                             <div className="movie-info">
//                                 <div className="movie-name">
//                                     <h3>{movie.name} <span> ({movie.year})</span>  </h3>
//                                 </div>
//                                 <div className="movie-rating">
//                                     <h3>{movie.rating}</h3>
//                                 </div>
//                             </div>
//                             <div className="movie-over">
//                                 <h3>Overview :</h3>
//                                 <p>{movie.description}</p>
//                             </div> 
//                         </div>
//                     })}
//                 </div>
//                 {this.state.toggleSwitchButton &&
//                     <div>
//                         <button className="switchLeft sliderButton" onClick={this.handleScrollLeft}  >{"<"}</button>
//                         <button className="switchRight sliderButton" onClick={this.handleScrollRight} > {">"} </button>
//                     </div>
//                 }
                        

//             </div>
//         )
//     }
// }


// export default MovieDisplayTemplate;