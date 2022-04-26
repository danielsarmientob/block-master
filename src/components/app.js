import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Header from './header.js'
import Actions from './actions.js'
import Search from './search.js'
import Filters from './filters.js'
import MovieList from './movie-list.js'
import Slider from './slider.js'

import store from '../store.js';

const AppStyled = styled.div`
  overflow: hidden;
`
const contImgCarga = styled.div`
  text-align: center;
`
const Spin = styled.div``
const img = styled.img``

const contImgNoEncontrado = styled.div`
`

class App extends Component {
  render() {
    
    return AppStyled({
      children: [
        new Header(),
        new Slider(),
       
        // new Actions({
        //   children: [
        //     new Search(),
        //     new Filters(),
        //   ]
        // }),
	      new MovieList(),
        contImgCarga({
          id: 'contImgCarga',
          children: Spin({
              id: 'imgCarga',
            }),
        }),
        contImgNoEncontrado({
          class: 'contNoEncontrado',
          children: [
            img({
              src: '../../images/Searching.png'
            }),
            createElement('span',{
              class: 'spanImgNoEncontrada'
            },'')
          ]
        })
      ]
    })
  }
}

export default App
