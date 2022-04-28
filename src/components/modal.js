import { SELECT_MOVIE } from "../actions/index.js";
import api from "../api.js";
import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import store from "../store.js";
import ContBotonesSlider from "./ContBotonesSlider.js";
import MovieSelect from "./movieSelect.js";

const ModalCont = styled.div``

const modalDescription = styled.div``

const divContent = styled.div``
class Modal extends Component {
    title = 'Ifamus'
    description = 'Lorem ipsum dolor sit amet. Et dolore eligendi sed asperiores amet non nostrum sint est laborum voluptas qui deleniti expedita. Eum provident illo ea ipsum labore et voluptatem excepturi id quisquam molestiae sit voluptatum numquam in ducimus consequatur. '
    year = '2020'
    genero = 'Crimen/suspenso'
    time = '1h 40m'
    // Api = new api
    movie = null
    getTime(time){
        let hour = Math.floor(time / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        let minute = Math.floor((time / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        return `${hour}h ${minute}m` ;
    }
    getGeneros(generos){
        let textGeneros='';
        generos.forEach(genero => {
            textGeneros += genero.name+'/'
        })

        return textGeneros.substring(0, textGeneros.length - 1);
    }
    handleCloseModal(){
        const modal = document.querySelector('.modal');
        store.dispatch({
            type: SELECT_MOVIE,
            payload: null
        })
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';

    }
 

    render(){
        const state = store.getState()
        if(state.movieSelect){
            const {id, title='', overview='', release_date='', genres=[], runtime=0} = state.movieSelect;
            const movieList = state.movieList
            this.movie = movieList.get(id);
            this.title = title
            this.description = overview
            this.year = release_date.split('-')[0]
            this.genero = this.getGeneros(genres)
            this.time = this.getTime(runtime*60)
        }

        return ModalCont({
            class: 'modal',
            children:[
            divContent({
                onclick: this.handleCloseModal,
                class: 'contIconsClose',
                children:[
                    createElement('img',{
                    src: './icons/close.svg'
                    })
                ]
                }),
              modalDescription({
                class: 'modalDescription',
                children:[
                  
                  (this.movie)? new MovieSelect(this.movie) : createElement('div'),
                  divContent({
                      class: 'contenedorDatosGenerales',
                      children:[
                          createElement('span',{
                            class: 'titleModal'
                          },this.title),
                          createElement('span',{
                            class: 'descriptionModal'
                          },this.description),
                          divContent({
                            class: 'contentDatos',
                            children:[
                              createElement('span',{
                                class: ''
                              },this.year),
                              createElement('div',{
                                class: 'contBola'
                              }),
                              createElement('span',{
                              },this.genero),
                              createElement('div',{
                                class: 'contBola'
                              },),
                              createElement('span',{
                                class: 'textDatos'
                              },this.time),
                            ]
                          }),
                          new ContBotonesSlider()
                      ]
                  }),
                ]
              }),
            ]
          })
    }
}

export default Modal;