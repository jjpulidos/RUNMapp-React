import React, { Component } from 'react'
import axios from "axios";
import './Support.css'
import store from "../Redux/Redux";


class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            rateArrays: {
                low: [],
                mid: [],
                high: []
            },
            classes: {
                lowRate: '',
                middleRate: '',
                highRate: ''
            },
            categories: [
                {ic: true},
                {ic: false},
                {ic: false},
                {ic: false}
            ],
            toggle_Side: '',
        }

        store.subscribe(() => {

          if (store.getState().toggle_Sides === true) {
            this.setState({
                ...this.state,
                data: store.getState().events,
                toggle_Side: 'Toggle_Left'
            })
          }



          // setTimeout(() => console.log('Support Data: ', this.state.data), 1000)
        })
    }

    // sendRequest = (p) => {
    //     const a = -74.08287672330447, b = 4.635801236440102;
    //     const req = {
    //         categories: [p],
    //         distance: 300,
    //         coordPoint: [a.toPrecision(16), b.toPrecision(16)],
    //         nameEventService: '',
    //         isEvent: true,
    //         initDate: Date.now() +1000000000 ,
    //         finishDate: Date.now() +10000000000000 ,
    //         minRate: 1.0,
    //         maxRate: 100
    //     };
    //     axios.post('https://runmapp-final.herokuapp.com/getEvents', req).then(x => {
    //     // axios.post('http://192.168.1.118:5000/getEvents', req).then(x => {
    //         const _data = x.data.events
    //         console.log(x.data.events);
    //
    //         _data.map(x => {
    //             switch (x.location) {
    //                 case '5c549598573ea33fb2afb780': x.location = 'Escuela de Cine y Televisión' ; break;
    //                 case '5c549598573ea33fb2afb776': x.location = 'Escuela de Medicina' ; break;
    //                 case '5c549598573ea33fb2afb77e': x.location = 'Museo de Arte'; break;
    //                 case '5c549598573ea33fb2afb774': x.location = 'Instituto de Extensión e Investigación'; break;
    //                 case '5c549598573ea33fb2afb773': x.location = 'Edificio de Química'; break;
    //                 case '5c549598573ea33fb2afb783': x.location = 'Biblioteca Central Gabriel García Márquez'; break;
    //                 case '5c549598573ea33fb2afb77c': x.location = 'Edificio de Ciencias Agrarias'; break;
    //                 case '5c549598573ea33fb2afb77f': x.location = 'Conservatorio de Musica'; break;
    //                 case '5c549598573ea33fb2afb781': x.location = 'Edificio Orlando Fals Borda'; break;
    //                 case '5c549598573ea33fb2afb784': x.location = 'Edificio de Ciencias'; break;
    //                 case '5c549598573ea33fb2afb77a': x.location = 'Edificio Posgrados de Ciencias Humanas'; break;
    //                 case '5c549598573ea33fb2afb77b': x.location = 'Edificio de Geociencias'; break;
    //                 case '5c549598573ea33fb2afb782': x.location = 'Edificio de Ciencias Económicas'; break;
    //                 case '5c549676573ea34015bf63ff': x.location = 'Edificio de Física, Estadistica y Matemáticas (FEM)'; break;
    //                 case '5c549676573ea34015bf6400': x.location = 'Edificio de Enfermería'; break;
    //                 case '5c54971f573ea34050326bca': x.location = 'Edifio veterinaria y zootecnia'; break;
    //                 case '5c5498bc573ea3417c59c8b1': x.location = 'León de Greiff'; break;
    //                 case '5c549933573ea341ac4bdf31': x.location = 'Edificio Ciencia y Tecnología (CyT)'; break;
    //                 case '5c5499fe573ea34280f8b4ab': x.location = 'Edificio Insignia de Ingeniería'; break;
    //                 case '5c5499fe573ea34280f8b4ac': x.location = 'Edificio Aulas de Ingeniería'; break;
    //             }
    //         })
    //
    //         this.setState({
    //             data: x.data.events //This can be response.data[i] where i is the current object inside the array
    //         })
    //     })
    // }

    backToMap = () => {
      this.setState({
        toggle_Side: 'Toggle_Right'
      })
        store.dispatch({
          type: 'TOGGLE-RIGHT'
        })

    }


    render(){
        return (
            <div className={`MainSuppContainer ${this.state.toggle_Side}`}>

                {/*<button onClick={() => console.log(this.state.data)}>CHECK</button>*/}
                <div className='Padding'>
                    <div className="MainGrid">

                        <div onClick={this.backToMap} className='BackToMap'>Volver al Mapa</div>
                        {

                            this.state.data.map(x => {

                              switch (x.location) {
                                case '5c549598573ea33fb2afb780': x.location = 'Escuela de Cine y Televisión' ; break;
                                case '5c549598573ea33fb2afb776': x.location = 'Escuela de Medicina' ; break;
                                case '5c549598573ea33fb2afb77e': x.location = 'Museo de Arte'; break;
                                case '5c549598573ea33fb2afb774': x.location = 'Instituto de Extensión e Investigación'; break;
                                case '5c549598573ea33fb2afb773': x.location = 'Edificio de Química'; break;
                                case '5c549598573ea33fb2afb783': x.location = 'Biblioteca Central Gabriel García Márquez'; break;
                                case '5c549598573ea33fb2afb77c': x.location = 'Edificio de Ciencias Agrarias'; break;
                                case '5c549598573ea33fb2afb77f': x.location = 'Conservatorio de Musica'; break;
                                case '5c549598573ea33fb2afb781': x.location = 'Edificio Orlando Fals Borda'; break;
                                case '5c549598573ea33fb2afb784': x.location = 'Edificio de Ciencias'; break;
                                case '5c549598573ea33fb2afb77a': x.location = 'Edificio Posgrados de Ciencias Humanas'; break;
                                case '5c549598573ea33fb2afb77b': x.location = 'Edificio de Geociencias'; break;
                                case '5c549598573ea33fb2afb782': x.location = 'Edificio de Ciencias Económicas'; break;
                                case '5c549676573ea34015bf63ff': x.location = 'Edificio de Física, Estadistica y Matemáticas (FEM)'; break;
                                case '5c549676573ea34015bf6400': x.location = 'Edificio de Enfermería'; break;
                                case '5c54971f573ea34050326bca': x.location = 'Edifio veterinaria y zootecnia'; break;
                                case '5c5498bc573ea3417c59c8b1': x.location = 'León de Greiff'; break;
                                case '5c549933573ea341ac4bdf31': x.location = 'Edificio Ciencia y Tecnología (CyT)'; break;
                                case '5c5499fe573ea34280f8b4ab': x.location = 'Edificio Insignia de Ingeniería'; break;
                                case '5c5499fe573ea34280f8b4ac': x.location = 'Edificio Aulas de Ingeniería'; break;  
                              }



                                if (x.rate <= 33) {
                                    return  (
                                        <div className={'Square' } id={x._id} key={x._id}>
                                            <p className='Rate'> {x.rate} </p>
                                            <div className='Flex'>
                                                <h4 className='Subtitle'> {x.name} </h4>
                                                <p className='Location'> {x.location} </p>
                                            </div>
                                        </div>
                                    )
                                }else if (x.rate > 33 && x.rate <= 66) {
                                    return  (
                                        <div className={'Square MidRate' } id={x._id} key={x._id}>
                                            <p className='RateMid'> {x.rate} </p>
                                            <div className='Flex'>
                                                <h4 className='Subtitle'> {x.name} </h4>
                                                <p className='Location'> {x.location} </p>
                                            </div>
                                        </div>
                                    )

                                }else if (x.rate > 66 && x.rate <= 100) {
                                    return  (
                                        <div className={'Square HighRate' } id={x._id} key={x._id}>
                                            <p className='RateHigh'> {x.rate} </p>
                                            <div className='Flex'>
                                                <h4 className='Subtitle'> {x.name} </h4>
                                                <p className='Location'> {x.location} </p>
                                            </div>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
                </div>
            </div>
        )
    }


}

export default Support
