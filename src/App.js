import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
    state = {
        is_loding : true,
        movies : []
    };
    get_movies = async () => {
        const {data : {data :{movies} }} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({movies : movies, is_loding : false});
    }
    componentDidMount() {
        this.get_movies();
    }
    render(){
        const {is_loding, movies} = this.state;
        return (
            <section className="container">
                {is_loding ? 
                    (<div className="loader">
                        <span className="loader_text"> Loading...</span>
                    </div>
                      )  : (
                    <div className="movies">
                        {movies.map(movie =>(
                            <Movie
                                key ={movie.id}
                                id={movie.id} 
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres = {movie.genres} 
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
