import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'
import movies from './movies.js'
import {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
} from './normalize.js'

const initialState = {
  movieList: movieListAsMap(movies),
  filter: 'all',
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    leastValued: getLeastValuedIds(movies),
  },
  search: [],
  isQuery: false,
  query: '',
  movieSelect: null,
}

const store = createStore(reducer, initialState)

export default store
