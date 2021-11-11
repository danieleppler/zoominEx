#Application Overview

This application had been written in on Visual studio code in JavaScript with React.
The application consists of 3 major components, App, NavBar and MovieDetails.
App fetches data from Swapi API and renders NavBar. NavBar is basically the TOC of the application. The TOC shows the list of Star Wars movie.
When clicking on a movie, NavBar renders MovieDetails component, that shows a card with the movie details. The card also had a button that allows the user
to choose his favorite Star Wars movie.
When the button is clicked, MovieDeatils components send the selection all the way up the structure tree to App component using callback functions.
the selected favorite movie is stored in the browser local storage, means the selection will be saved also when the website is closed.

I used Bootstrap for the styling of the movie list and the movie details card. I also used bootstrap grid system for the responsible view.
