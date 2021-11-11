import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = {
            MoviesList: [],
            Loaded: false,
            FavouriteMovie: ''
        }
    }

    componentDidMount() {
        fetchMovies().then(result => {
            this.setState({
                MoviesList: result,
                Loaded: true
            })
        })
    }

    selectFavourite = (Movie) => {
        localStorage.setItem('SelectedMovie', '' + Movie.title);
        console.log(Movie + "saved on local storage")
        this.setState({
            FavouriteMovie: Movie.title
        })
    }


    render() {

        const selectedMovie = localStorage.getItem('SelectedMovie');

        const FavouriteMovie = <p id="favourite-movie"><b> Your favourite movie: {
            selectedMovie} </b></p>;

        if (!this.state.Loaded)
            return (
                <div>
                    <h1> Fetching Data.... </h1>
                </div>
            );


      return (
          <div>
              <div class="stars"></div>
              {FavouriteMovie}
              <NavBar moviesList={this.state.MoviesList}
                      selectFavourite={this.selectFavourite} />
          </div>
    );
  }
}


async function fetchMovies() {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const movies = data.results;
    console.log(movies);
    return movies;
}
