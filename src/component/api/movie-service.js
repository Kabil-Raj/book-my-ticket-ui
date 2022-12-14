import axios from "axios";

const api_url = "http://bmt-api-gateway:80/movies"


class MovieService {

    getTrendingMovies() {
        return axios.get(api_url+"/trending/movies/");      
    }

    getMoviesByGenere(genre) {
        
        return axios.get(api_url + "/genre/" +genre)

    }

    getMovieById(id) {
        return axios.get(api_url + "/" +id+"/")
    }

}


export default new MovieService();