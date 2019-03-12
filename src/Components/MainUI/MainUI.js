import React, {Component} from 'react'
import './MainUI.css'
import MainMenu from '../MainMenu/MainMenu'
import menuIcon from './SVG/test.svg'
import sportsIcon from './SVG/soccer.svg'
import adminIcon from './SVG/folder.svg'
import acadeIcon from './SVG/scholarship.svg'
import cultureIcon from './SVG/theater.svg'
import axios from 'axios'
import store from "../Redux/Redux";
import Support from '../Support/Support'
import Map from '../Map/Map'

class MainUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            iconStatus: false,
            categories: [
                {ic: false},
                {ic: false},
                {ic: false},
                {ic: false}
            ],
            toggle: '',
            toggleMenu: '',
            hide: '',
            hide_element: ''
        }
        store.subscribe(() => {
            this.setState({
                ...this.state,
                hide: store.getState().overflow,
                toggleMenu: store.getState().toggle,
            })
        })

    }
    componentDidMount() {
        this.setState({
            ...this.state,
            hide: 'Hide',
        })
    }

    //Methods
    // componentWillMount() {
    //     const a = -74.08287672330447, b = 4.635801236440102;
    //     const cat = {
    //                 categories: ['Sports'],
    //                 distance: 300,
    //                 coordPoint: [a.toPrecision(16), b.toPrecision(16)],
    //                 nameEventService: '',
    //                 isEvent: true,
    //                 initDate: Date.now() +1000000000 ,
    //                 finishDate: Date.now() +10000000000000 ,
    //                 minRate: 1.0,
    //                 maxRate: 100
    //             };
    //
    //             axios.post('https://runmapp-final.herokuapp.com/getEvents', cat).then(res => {
    //               console.log(res.data)
    //
    //                 store.dispatch({
    //                     type: 'PUSH-BUILD',
    //                     _data: {
    //                         buildings: res.data.buildings,
    //                         events: res.data.events
    //                     }
    //                 })
    //
    //             })
    //
    //
    //
    // }

    changeIconStatus = () => {
        !this.state.iconStatus ? this.setState({
            iconStatus: !this.state.iconStatus,
            toggle: 'ToggleRight'
        }) : this.setState({
            iconStatus: !this.state.iconStatus,
            toggle: 'ToggleLeft'
        })
    }



    fillArray = e => {
         switch (e.target.getAttribute('id')) {
             case '_ic1': this.state.categories[0].ic = !this.state.categories[0].ic; break;
             case '_ic2': this.state.categories[1].ic = !this.state.categories[1].ic; break;
             case '_ic3': this.state.categories[2].ic = !this.state.categories[2].ic; break;
             case '_ic4': this.state.categories[3].ic = !this.state.categories[3].ic; break;
         }

        let requested = [];
        for (let i = 0; i<4; i++) {
            switch(i) {
                case 0: { if (this.state.categories[i].ic === true) {requested.push('Sports')} } break;
                case 1: { if (this.state.categories[i].ic === true) {requested.push('Administrative')} } break;
                case 2: { if (this.state.categories[i].ic === true) {requested.push('Academic')} } break;
                case 3: { if (this.state.categories[i].ic === true) {requested.push('Culture')} } break;
            }
        }

        const a = -74.08287672330447, b = 4.635801236440102;
        const cat = {
            categories: requested,
            distance: 300,
            coordPoint: [a.toPrecision(16), b.toPrecision(16)],
            nameEventService: '',
            isEvent: true,
            initDate: Date.now() +1000000000 ,
            finishDate: Date.now() +10000000000000 ,
            minRate: 1.0,
            maxRate: 100
        };

        axios.post('https://runmapp-final.herokuapp.com/getEvents', cat).then(res => {
          // console.log(res.data)

            store.dispatch({
                type: 'PUSH-BUILD',
                _data: {
                    buildings: res.data.buildings,
                    events: res.data.events
                }
            })
        })


    }

    toggleMenu = () => {
        store.dispatch({type: "TOGGLE-UP"});
    };


    render() {

        return (
            <div className={`MainUIContainer ${this.state.hide} ${this.state.hide_element}`}>
                <div className='MenuContainer'>
                    <Map />
                    <div className='CategoriesMenuContainer'>
                        <img src={menuIcon} className='MenuIcon' onClick={this.changeIconStatus}/>
                        <div className='CategoriesMenuContainer2'>
                            <img src={sportsIcon} id='_ic1' onClick={this.fillArray} className={'Icon '+ this.state.toggle} />
                            <img src={adminIcon} id='_ic2' onClick={this.fillArray} className={'Icon '+ this.state.toggle}/>
                            <img src={acadeIcon} id='_ic3' onClick={this.fillArray} className={'Icon '+ this.state.toggle}/>
                            <img src={cultureIcon} id='_ic4' onClick={this.fillArray} className={'Icon '+ this.state.toggle}/>
                        </div>
                    </div>
                </div>

                <div className='MenuWrapperContainer'>
                    <div className='MenuWrapper' onClick={this.toggleMenu}>
                        <p>RUNmapp</p>
                    </div>
                </div>

                <MainMenu/>
                <Support />

            </div>
        )
    }

}

export default MainUI;
