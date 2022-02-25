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
  <div onClick={()=>{setClicked(!clicked)}}  id={props.id} >  
  
   {props.states.name} </div>

  
 <ol> {clicked &&  

props.states.cities.map((city,index)=>{
return   <City id={`city${index+1}`} indcity={city} index={index} stateClicked={clicked}/>
})
}
</ol>

</>
 

  )}

export default IndividualState