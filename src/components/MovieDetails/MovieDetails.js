import React from 'react';
import './MovieDetails.css';

class MovieDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Movie: props.chosenMovie,
            selectFavourite: props.selectFavourite
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.chosenMovie.title !== this.state.Movie.title;
    }

    componentDidUpdate(props) {
        this.setState({
            Movie: props.chosenMovie
        })
    }

    render() {
        return (
                <div className="card" id="MovieDetails">
                    <div className="card-body">
                          <h5 className="card-title" id="movie-title">{this.state.Movie.title}</h5>
                        <p className="card-text">
                                <div id="abstract">
                                director : {this.state.Movie.director} <br />
                                producer: {this.state.Movie.producer} <br />
                                release_date: {this.state.Movie.release_date} <br />
                                No. in series : {this.state.Movie.episode_id} <br />
                                </div>
                                <b>{this.state.Movie.opening_crawl}</b> 
                            </p>
                            <a href="#" className="btn btn-primary" id="make-fav-button" onClick={() => { this.state.selectFavourite(this.state.Movie) }}>
                            Make this movie your favourite </a>
                    </div>
                </div>
            

                
            )
    }
}
export default MovieDetails