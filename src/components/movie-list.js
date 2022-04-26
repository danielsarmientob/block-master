import { Component } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';
import Wrapper from './wrapper.js';
import Movie from './movie.js';
import store from '../store.js';
import api from '../api.js'
import { ADD_MOVIES } from '../actions/index.js'
//import movies from '../movies.js';

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends Component {
  state = {
    page: 1,
  }
  getPage = async (page) => {
    
    const { results } = await api.moviePage(page)
    store.dispatch({
      type: ADD_MOVIES,
      payload: results
    })
  }
  handleIntersection = (entries) => {
    if(entries[0].isIntersecting) {
      const imgCarga = document.getElementById('contImgCarga');
      const {search, isQuery} = store.getState();
      if( !isQuery ) {
        imgCarga.style.display =  'block';  
        setTimeout(() => {
          this.getPage(this.state.page)
          this.setState({
            page: this.state.page + 1
          })
          imgCarga.style.display =  'none';
          
        }, 500);
      }else {
        // if(search.length === 0) {
        //   // TODO: hacer aparecer la imagen de no encontrado
        //   // const imgNoEncontrado = document.querySelector('.contNoEncontrado');
        //   // imgNoEncontrado.style.display = 'flex';
        //   // console.log('debug',search?.length)
        // }
      }
    }
  }
  componentDidMount() {
    // this.getPage(this.state.page)
    store.subscribe(() => {
      this.setState()
    })
    
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }
    const observer = new IntersectionObserver(this.handleIntersection,options)
    observer.observe(window.intersector)
    // debugger
  }  
  render() {
    const state = store.getState()
    const movieListId = state.list[state.filter]
    const movieList = state.movieList
    const {search} =  state;
    console.log(state)
   
    return Wrapper({
      children: MovieListStyled({
        children: movieListId.map(id => new Movie(movieList.get(id)))
      })
    })
  }
}

export default MovieList
