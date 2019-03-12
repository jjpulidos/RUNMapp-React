import React, { Component } from 'react';
import './MainMenu.css'
import add from './SVG/add.svg'
import like from './SVG/like.svg'
import mapLocation from './SVG/map-location.svg'
import review from './SVG/review.svg'
import services from './SVG/museum.svg'
import downIcon from './SVG/down-arrow.svg'

import store from '../Redux/Redux'
import Form from '../Form/Form'
import Support from '../Support/Support'

class MainMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            advices: [
                "Sin voluntad de estudiar, no hay nada que hacer... y los motivos que tengas para estudiar son decisivos.",
                "La felicidad no depende de que tengas todos los brazos y todas las piernas si no de cómo utilices los que te quedan",
                "Soñar te hace sentir bien hasta que te despiertas",
                "No hay ninguna pregunta cuya respuesta no se encuentre en un capítulo de Los Simpsons.",
                "Ayudar a los que lo necesitan está muy bien pero está mejor ayudarles a que no te necesiten.",
                "Tus hobbies te definen mucho más que tu trabajo",
                "No hay nada malo en estar equivocado, lo malo es empeñarte en seguir estándolo.",
                "¿Sabias que los koalas pueden vivir toda su vida sin tomar agua.?",
                "Es posible hacer que una vaca suba escaleras pero no que las baje.",
            ],
            toggle: ''
        }

        store.subscribe(() => {
          let _state = store.getState()
          let toggleDirection = ''

          if (_state.toggle_UpDown) {
            toggleDirection = 'ToggleUp'
          }else {
            toggleDirection = 'ToggleDown'
          }

            this.setState({
                ...this.state,
                toggle: toggleDirection
            })
        })
    }

    getDayAdvice = () => this.state.advices[Math.floor(Math.random()*this.state.advices.length)]

    toggleDown = () => {
        store.dispatch({
          type: 'TOGGLE-DOWN'
        })
    }

    toggleSide = () => {
        store.dispatch({
            type: 'TOGGLE-LEFT'
        })
    }
    // toggleSideClose = () => {
    //     store.dispatch({
    //         type: 'TOGGLE-LEFT-CLOSE'
    //     })
    // }
    // toggleSidePopular = () => {
    //     store.dispatch({
    //         type: 'TOGGLE-LEFT-POPULAR'
    //     })
    // }
    // toggleSideService = () => {
    //     store.dispatch({
    //         type: 'TOGGLE-LEFT-SERVICE'
    //     })
    // }

    render() {

        return (
            <div className={`MainMenuContainer ${this.state.toggle}`}>
                <img src={downIcon} className='DownIcon' onClick={this.toggleDown} alt=""/>
                <h2 className='MainMenuTitle'>RUNMapp Menu</h2>
                <div className='DailyAdvices'>
                    <i> "{ this.getDayAdvice() }" </i>
                </div>
                <ul className='MenuList'>
                    <li onClick={this.toggleSide} className='MenuList_item'><img src={mapLocation} className='ListIcon' alt=""/> <a>Eventos Más Cercanos</a></li>
                    {/*<li className='MenuList_item'><img src={category} className='ListIcon' alt=""/><a>Categorías</a></li>*/}
                    <li onClick={this.toggleSide} className='MenuList_item'><img src={review} className='ListIcon' alt=""/><a>Eventos más Populares</a></li>
                    <li onClick={this.toggleSide} className='MenuList_item'><img src={services} className='ListIcon' alt=""/><a>Servicios Recurrentes</a></li>
                </ul>

                <div className='CreateSupportContainer'>
                    <div className='NewEventContainer' >
                        <img className='NewEvent_Icon' src={add} alt="add_icon"/>
                        <h3>Crear nuevo Evento</h3>
                    </div>

                    <div className='SupportEventContainer' onClick={this.toggleSide}>
                        <h3>Apoyar un Evento</h3>
                        <img className='SupportEvent_Icon' src={like} alt="like_icon"/>
                    </div>
                </div>



            </div>
        );
    }
}

export default MainMenu;
