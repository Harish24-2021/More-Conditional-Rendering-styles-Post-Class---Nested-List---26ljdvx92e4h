import React, { useState } from 'react'
import City from './City'


function IndividualState(props) {
  // console.log(props.state.cities)
  // let stateId= `state${props.index+1}`
  // let singleState=props.state.cities

  const[clicked,setClicked]=useState(false)
  const[clickedIndex,setClickedIndex]=useState()
  // function clickHandler(){
  //   setClicked(!clicked)
  // }

  console.log(clicked)
  return (
     <>  
<ul onClick={()=>{setClicked(!clicked)}} >
  
  <li id={`state${props.index+1}`} > {props.states.name}</li> 

  </ul>  
  <ol>
{clicked &&  

props.states.cities.map((city,index)=>{
return <City indcity={city} index={index} />
})
}
</ol>
</>
 

  )}

export default IndividualState