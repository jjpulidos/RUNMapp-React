import React, {Component} from 'react'
import ReactMapboxGl, {Marker} from "react-mapbox-gl";
import store from '../Redux/Redux'
import icon from './MZORH6b.png'
import './Map.css'


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [-74.084238, 4.638144],
            zoom: [15],
            bounds: [[-74.099611, 4.630076], [-74.072035, 4.644709]],
            pitch: [120],
            bearing: [-70],


            geojson: {
                type: 'FeatureCollection',
                features: []
            },

            arrayBuildingsSelected: [

            ],

            _render: false

        }

        store.subscribe(() => {

            if (store.getState().StylesState.renderMapData){
              console.log('se han añadido builidings')
              this.setState({
                  ...this.state,
                  arrayBuildingsSelected: store.getState().buildings
              })
              store.dispatch({
                type: 'RESET-MAP-DATA-RENDER'
              })

              this.setGeoJason()
            }





        })


    }


    setGeoJason = () => {
      console.log('Actualizando el geojson')
      this.state.arrayBuildingsSelected.map((building, i) => {
          this.state.geojson.features.push({
              type: 'Feature',
              geometry: {
                  type: 'Point',
                  coordinates: building.latlng.coordinates
              },
              properties: {
                  name: building.name,
                  _id : building._id
              }
          })
          console.log(i);
          if (i === this.state.arrayBuildingsSelected.length - 1) {
              this.setState({ ...this.state, _render: true })
              console.log('Iteracion final')
          }
      });
    }

    onLoaded(map) {
        var layers = map.getStyle().layers;
        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }
        map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': [
                    "interpolate", ["linear"], ["zoom"],
                    15, 0,
                    15.05, ["get", "height"]
                ],
                'fill-extrusion-base': [
                    "interpolate", ["linear"], ["zoom"],
                    15, 0,
                    15.05, ["get", "min_height"]
                ],
                'fill-extrusion-opacity': .6
            }
        }, labelLayerId);
        map.addSource('currentBuildings', {
            type: 'geojson',
            data: {
                "type": "FeatureCollection",
                "features": []
            }
        });
        map.addLayer({
            "id": "highlight",
            "source": "currentBuildings",
            'type': 'line',
            'minzoom': 15,
            'paint': {
                'line-color': '#f00',
                'line-width': 3
            }
        }, labelLayerId);
        map.on('click', '3d-buildings', function (e) {
            map.getSource('currentBuildings').setData({
                "type": "FeatureCollection",
                "features": e.features
            });
        });

    } //Aqui termina el Loaded



    markerRequest = (e) => {
        const currentId = e.target.getAttribute('id');
        console.log(currentId)
        store.dispatch({
            type: 'SHOW-EVENTS-MAP',
            id: currentId
        })
        store.dispatch({
            type: 'CAN-TOGGLE-ON',
            id: currentId
        })
    }

    render() {

        const Map = ReactMapboxGl({
            accessToken: "pk.eyJ1IjoiampwdWxpZG9zIiwiYSI6ImNqdDI5YXZwNDI3bzU0NW9kZGVscGFvbzcifQ.nzvc3anrE_jXsxL140Mxsg"
        })

        return (
            <div className='MainMapContainer'>
                <Map

                    style="mapbox://styles/mapbox/dark-v9"
                    center={this.state.center}
                    zoom={this.state.zoom}
                    maxBounds={this.state.bounds}
                    pitch={this.state.pitch}
                    bearing={this.state.bearing}
                    containerStyle={{
                        height: "100vh",
                        width: "100vw"
                    }}
                    onStyleLoad={this.onLoaded}
                >

                    {
                        this.state.geojson.features.map( feature => {
                            if (this.state._render) {
                                return (
                                    <div onClick={this.markerRequest} key={Math.random()*10000} >
                                        <Marker coordinates={feature.geometry.coordinates} >
                                            <img src={icon} width={30} height={30} alt="" id={feature.properties._id}/>
                                        </Marker>
                                    </div>

                                )
                            }
                        })
                    }

                </Map>

            </div>
        )
    }
}

export default Map
