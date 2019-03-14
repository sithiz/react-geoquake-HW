import React, { Component } from 'react';
import EarthQuakeComp from './EarthQuakeList'
class App extends Component {
    state = {
      earthQuakes : '',
      data : false
    }

    dataFetch = () => {
        fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
           .then((response) => {
              return response.json();
            })
          .then((myJson) => {
              console.log(JSON.stringify(myJson))
              return myJson
            }).then(newData => {
                this.setState({
                  earthQuakes : newData ,
                  data : true
                })
            })
        }

  render() {
    if(this.state.data !== true){
      this.dataFetch()
    }

    let dataList = this.state.earthQuakes
    console.log(dataList.features)
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            <EarthQuakeComp dataList={this.dataList} />
        </div>
      </div>
    );
  }
}

export default App;
