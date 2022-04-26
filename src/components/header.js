import { Component, createElement } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Wrapper from './wrapper.js'
import Search from './search.js'; 
import LinkHeader from './link-header.js'
import LinkHeaderSmall from './link-header-small.js'
import store from '../store.js';
import { SET_FILTER } from '../actions/index.js'

const HeaderStyled = styled.header`
  background: var(--backgroundHeader);
  margin-bottom: 2em;
  block-size: 7rem;
  display: flex;
  position: relative;
`

const HeaderLogo = styled.img`
  position: relative;
`

const HeaderContain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  inline-size: 100%;
  align-items: center;
  block-size: 7rem;
  position: relative;
  overflow: hidden;
`

const HeaderMenuSmall = styled.div`
  display: flex;
  gap: 1.5rem;
`

const HeaderMenuSmallIcons = styled.img`
  position: relative;
`

const HeaderSmallInput = styled.div``
const HeaderSmalMenu = styled.div``



class Header extends Component {
  handleChange(opcion){
    store.dispatch({
      type: SET_FILTER,
      payload: opcion,
    })
  }
  handleSearchSmall(){
    const smallSearch$ = document.getElementById('smallSearch');
    smallSearch$.classList.add('smallSearchOpen')
  }
  handleSmallMenu(){
    const smallMenu = document.getElementById('smallMenu');
    if(!smallMenu.classList.contains('headerSmallMenuOpen')) smallMenu.classList.add('headerSmallMenuOpen');
    else smallMenu.classList.remove('headerSmallMenuOpen');
  }
  
  handleBack(){
    const smallSearch$ = document.getElementById('smallSearch');
    smallSearch$.classList.remove('smallSearchOpen')
  }
  handleFiltro(id){
    const  todos = document.getElementById('headerTodos');
    const  masValorados = document.getElementById('headerMasValorados');
    const  menosValorados = document.getElementById('headerMenosValorados');
    const  todos_a = document.getElementById('headerTodos-a');
    const  masValorados_a = document.getElementById('headerMasValorados-a');
    const  menosValorados_a = document.getElementById('headerMenosValorados-a');
    const smallMenu = document.getElementById('smallMenu');
    
    // Esconder img "no encontro resultados"
    document.querySelector('.contNoEncontrado').style.display = 'none';
    switch(id){
      case 'headerTodos':
        todos.classList.add('isActive');
        masValorados.classList.remove('isActive');
        menosValorados.classList.remove('isActive');

        todos_a.classList.add('isActive');
        masValorados_a.classList.remove('isActive');
        menosValorados_a.classList.remove('isActive');
        smallMenu.classList.remove('headerSmallMenuOpen');
        this.handleChange('all')
        break
      case 'headerMasValorados':
        masValorados.classList.add('isActive');
        todos.classList.remove('isActive');
        menosValorados.classList.remove('isActive');

        masValorados_a.classList.add('isActive');
        todos_a.classList.remove('isActive');
        menosValorados_a.classList.remove('isActive');
        smallMenu.classList.remove('headerSmallMenuOpen');
        this.handleChange('mostValued')
        break
      case 'headerMenosValorados':
        menosValorados.classList.add('isActive');
        todos.classList.remove('isActive');
        masValorados.classList.remove('isActive');

        menosValorados_a.classList.add('isActive');
        todos_a.classList.remove('isActive');
        masValorados_a.classList.remove('isActive');
        smallMenu.classList.remove('headerSmallMenuOpen');
        this.handleChange('leastValued')
        break
      default:
        return 
    }
  }
  render() {
    return HeaderStyled({
      children: [
        Wrapper({
          id: 'wrapper',
          children: HeaderContain({
            children: [
              HeaderLogo({ 
                class: 'headerLogo',
                src: './images/logo.png' 
              }),
              new LinkHeader({
                class: 'linkHeader',
                onclick: ()=>this.handleFiltro('headerTodos'),
                children:[
                  createElement('p', {
                    id: 'headerTodos',
                    class: 'isActive',
                  }, 'Todos')
                ]
              }),
              new LinkHeader({
                class: 'linkHeader',
                onclick: ()=>this.handleFiltro('headerMasValorados'),
                children:[
                  createElement('p', {
                    id: 'headerMasValorados',
                    class: '',
                  }, 'Más valorados')
                ]
              }),
              new LinkHeader({
                class: 'linkHeader',
                onclick: ()=>this.handleFiltro('headerMenosValorados'),
                children:[
                  createElement('p', {
                    id: 'headerMenosValorados',
                    class: '',
                  }, 'Menos valorados')
                ]
              }),
              new Search(),
              HeaderMenuSmall({
                id: 'headerMenuSmall',
                children: [
                  HeaderMenuSmallIcons({
                    onclick: this.handleSearchSmall,
                    src: '../../icons/icon-search-yellow.svg'
                  }),
                  HeaderMenuSmallIcons({
                    onclick: this.handleSmallMenu,
                    src: '../../icons/menu.svg'
                  }),
                ]
              }),
              HeaderSmallInput({
                class: 'smallSearch',
                id: 'smallSearch',
                children: [
                  HeaderMenuSmallIcons({
                    onclick: this.handleBack,
                    src: '../../icons/back.svg'
                  }),
                  new Search(),
                ]
              }) 
            ]
          })
        }),
        HeaderSmalMenu({
          id: 'smallMenu',
          class: 'headerSmallMenu',
          children: [
            new LinkHeaderSmall({
              class: 'linkHeader-a',
              onclick: ()=>this.handleFiltro('headerTodos'),
              children:[
                createElement('p', {
                  id: 'headerTodos-a',
                  class: 'isActive',
                }, 'Todos')
              ]
            }),
            new LinkHeaderSmall({
              class: 'linkHeader-a',
              onclick: ()=>this.handleFiltro('headerMasValorados'),
              children:[
                createElement('p', {
                  id: 'headerMasValorados-a',
                  class: '',
                }, 'Más valorados')
              ]
            }),
            new LinkHeaderSmall({
              class: 'linkHeader-a',
              onclick: ()=>this.handleFiltro('headerMenosValorados'),
              children:[
                createElement('p', {
                  id: 'headerMenosValorados-a',
                  class: '',
                }, 'Menos valorados')
              ]
            }),
          ]
        })
      ]
    })
  }
}

export default Header