import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import ContBotonesSlider from "./ContBotonesSlider.js";


const ContSlider = styled.div``
const ContainerScroll = styled.div``
const ScrollPage = styled.div``
const ImgSlider = styled.img``
const SliderBulletList = styled.div``
const SliderBullet = styled.a``

class Slider extends Component {
    
    handleMoveSlider(numID){
        const container = document.getElementById('sliderContainer');
        const slider1 = document.getElementById('img1');
        // let scroll = slider1.scrollLeft;
        // scroll = slider1.clientWidth;
        // container.scrollLeft = slider1.clientWidth + 0.01*container.clientWidth;

        switch (numID) {
            case 1:
                container.scrollLeft = 0;
                document.getElementById('slider-bullet'+numID).style.background = 'white';
                document.getElementById('slider-bullet'+2).style.background = '#a7a9be';
                document.getElementById('slider-bullet'+3).style.background = '#a7a9be';
                break;
            case 2:
                container.scrollLeft = slider1.clientWidth + 0.01*container.clientWidth;
                document.getElementById('slider-bullet'+numID).style.background = 'white';
                document.getElementById('slider-bullet'+1).style.background = '#a7a9be';
                document.getElementById('slider-bullet'+3).style.background = '#a7a9be';
                break;
            case 3:
                container.scrollLeft =  2*slider1.clientWidth + 2*0.01*container.clientWidth            
                document.getElementById('slider-bullet'+numID).style.background = 'white';
                document.getElementById('slider-bullet'+1).style.background = '#a7a9be';
                document.getElementById('slider-bullet'+2).style.background = '#a7a9be';
                break;
            default:
                break;
        }
    }
    render(){
        return ContSlider({
            class: 'slider',
            children: [
                ContainerScroll({
                    id:'sliderContainer',
                    class: 'slider-container',
                    children: [
                        ScrollPage({
                            class: 'slider-slide',
                            id: 'img1',
                            children: ImgSlider({
                                class: 'img',
                                src: '../../images/mulan.png'
                            })
                        }),
                        ScrollPage({
                            class: 'slider-slide2',
                            id: 'img2',
                            children: ImgSlider({
                                class: 'img',
                                src: '../../images/raya.png'
                            })
                        }),
                        ScrollPage({
                            class: 'slider-slide3',
                            id: 'img3',
                            children: ImgSlider({
                                class: 'img',
                                src: '../../images/unidos.png'
                            })
                        }),
                        ScrollPage({
                            class: 'slider-slide4',
                            id: 'img4',
                            children: ImgSlider({
                                class: 'img',
                                src: '../../images/mulan.png'
                            })
                        }),
                    ]
                }),
                SliderBulletList({
                    class: 'slider-bullet-list ',
                    children: [
                        SliderBullet({
                            onclick: ()=> this.handleMoveSlider(1),
                            class: 'slider-bullet',
                            id: 'slider-bullet1',
                            // href: '#img1'
                        }),
                        SliderBullet({
                            onclick: ()=> this.handleMoveSlider(2),
                            class: 'slider-bullet',
                            id: 'slider-bullet2',
                            // href: '#img2'
                        }),
                        SliderBullet({
                            onclick: ()=> this.handleMoveSlider(3),
                            class: 'slider-bullet',
                            id: 'slider-bullet3',
                            // href: '#img3'
                        }),
                    ]
                }),
                new ContBotonesSlider(),

            ]
        }) 
    }
}

export default Slider;