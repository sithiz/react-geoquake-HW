import React from 'react'



const ListQuakes = (props) =>(
		<ul>
		{props.dataList.features.forEach((allQuakes)=>{
      		return <li>{allQuakes.properties.place}</li>
    		})
		}
		</ul>

	)


export default ListQuakes 