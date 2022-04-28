import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";

const ContBotones = styled.div`
    
`

const Button = styled.div`
    
`;

const SpanSlider = styled.span``

const IconButton = styled.img``
class ContBotonesSlider extends Component {
    render(){
        return ContBotones({
            class: 'contButtonsSlider contButtonsSliderModal',
            children: [
                Button({
                    class: 'buttonSlider btn-yellow',
                    children:[
                        IconButton({
                            src: '../../icons/iconReproducir.svg',
                        }),
                        createElement('p', {
                          },'VER AHORA'),
                    ]
                }),
                Button({
                    class: 'buttonSlider btn-black',
                    children:[
                        IconButton({
                            src: '../../icons/iconMas.svg',
                        }),
                        createElement('p', {
                          },'VER DESPUÉS'),
                    ]
                }),
            ]
        })
    }
}

export default ContBotonesSlider