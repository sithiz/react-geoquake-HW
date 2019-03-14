import React, { Component } from 'react';
import EarthQuakeComp from './EarthQuakeList'
import MapComp from './MapComp'
class App extends Component {
    state = {
      earthQuakes : { features:[] },
      data : false
    }

    dataFetch = () => {
        fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
           .then((response) => {
              return response.json();
            })
          .then((newData) => {
              console.log(JSON.stringify(newData))
              return newData
            }).then(newData => {
                this.setState({
                  earthQuakes : newData ,
                  data : true
                })
            })
        }
        
      componentDidMount(){
         this.dataFetch()
      }
  render() {
 

    let dataList = this.state.earthQuakes.features
    console.log(dataList)
    return (
      <div className="app">
        <div className="mapContainer">
          <MapComp earthQuakes={dataList} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            <EarthQuakeComp dataList={dataList} />
        </div>
      </div>
    );
  }
}

export default App;
