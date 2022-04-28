import { SELECT_MOVIE } from '../actions/index.js';
import api from '../api.js';
import { Component, createElement } from '../lib/react/index.js'
import store from '../store.js';

class Movie extends Component {

  async handleSelectMovie(id){

    const {
      title, 
      overview, 
      release_date, 
      genres, 
      runtime,
      vote_average
    } = await api.movieDetalles(id)
    store.dispatch({
      type: SELECT_MOVIE,
      payload: {
        id,
        title, 
        overview, 
        release_date, 
        genres, 
        runtime,
        vote_average
      }
    })
    const modal = document.querySelector('.modal');
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    // modal.style.zIndex = '1';
    
  }

   
  render() {
    const { poster_path, title, id, vote_average } = this.props
    return createElement('article', {
      class: `movie ${vote_average >= 7 ? 'recommended': ''}`,
      onclick: () => this.handleSelectMovie(id),
      children: [
        createElement('img', {
          class: 'movie-poster',
          src: `//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
        }),
        // createElement('p', {
        //   class: 'movie-title',
        // }, title),
        // createElement('p', {
        //   class: 'movie-id',
        // }, id),
        createElement('span', {
          class: 'movie-rate',
          children:[
            createElement('img',{
              src: './icons/estrella.svg'
            },)
          ]
        }, vote_average)
      ]
    })
  }
}

export default Movie
