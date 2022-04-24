import { Component, createElement } from '../lib/react/index.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'
import store from '../store.js'
import styled from '../lib/styled-components.js'
import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js'

const ImagenButton = styled.img`
  // width: 200px;
  // position: relative;
  // top: 20px;
  // filter: drop-shadow(3px 3px 0 #f2a30c);
`

class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const query = formData.get('title')
    if (query) {
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query
      })
    }
    return store.dispatch({
      type: SET_FILTER,
      payload: 'all'
    })
  }
  render() {
    return Form({              
      class: 'searchForm',
      onSubmit: this.handleSubmit,
      children: [
        new Input({
          id: 'inputSearchId',
          placeholder: 'Escribe tu película favorita',
          name: 'title',
          type: 'text',
        }),
        new Button({
          children: [
            ImagenButton({src: '../../icons/icon-search.svg'})
          ]
        })
      ]
    })
  }
}

export default Search