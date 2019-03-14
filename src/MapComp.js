import React, { Component } from 'react'
import { Maps, Marker, GoogleApiWrapper } from 'google-maps-react'

const mapStyle = {
	width: '40%',
	height: '90%'
}

export class EarthQuakeMap extends Component {


	render() {
		const markerList = this.props.earthQuakes.map((earthQuakes,index)=>{
			return (
				<Marker 
				key={index}
				position={{lat:earthQuakes.geometry.coordinates[1], lng: earthQuakes.geometry.coordinates[0]}}
				title={earthQuakes.properties.title}
				/>
				)
		})
		return(
			<div>
			<Maps 
				google={this.props.google}
				zoom={14}
				style={mapStyle}
				initialCenter={{
         			lat: 30.2682,
         			lng: -97.74295 
        			}}
      				>
      		</Maps>
      		</div>
			)


	}
}



export default GoogleApiWrapper({
	apiKey: 'AIzaSyAR1Q8F77pCpAWiF1A-dzVY1dmL9PlZUv0',
})(EarthQuakeMap);