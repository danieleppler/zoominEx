import React from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import './NavBar.css'


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MoviesList: props.moviesList,
            ChosenMovie: false,
            selectFavourite: props.selectFavourite
        }
    }

    selectFavourite = (Movie) => {
        this.props.selectFavourite(Movie);
    }


    render() {
        
        const listItems = this.state.MoviesList.map((movie) =>
            <li key={movie.title}
                className="list-group-item list-item"
                onClick={() => {
                    this.setState({
                        ChosenMovie: movie
                    })
                }}>
              
                {movie.title}
            </li>)


        const list = <div className="list-container">
            <ul className="list-group">
                            {listItems}
                        </ul></div>



        if (this.state.ChosenMovie !== false) {
            return (
                <div className="NavBar">
                    <div className="container">
                        <div className="row">
                            <div className="movies-container">
                                <div className="col-md-6">
                                    <div id="list-renderd">
                                        {list}
                                    </div>
                                </div>
                            <div className="col-md-6">        
                                <MovieDetails chosenMovie={this.state.ChosenMovie}
                                    selectFavourite={this.selectFavourite} />
                            </div>
                        </div>
                       </div>
                      </div>
                </div>
            )
        }

        else {
            return (
                <div className="container"><div className="row"><div className="col-md-6">
                    <div className="initial-list-view">
                        {list}
                    </div>
                    </div></div></div>
               
            )
        }
    }

}
export default NavBar