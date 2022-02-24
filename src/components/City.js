import React,{useState} from 'react'
import Town from './Town'

function City(props) {
    console.log(props.stateId)
    const[clicked,setCityClicked]=useState(false)
    const[clickedIndex,setClickedIndex]=useState()
    const[clickedCity,setClickedCity]=useState()

    console.log(clickedCity)
   if( !props.stateClicked ){
     setCityClicked(false)
     alert("sate is closed, so city is also closed")
   }


  return (
    <div         onClick={()=>{setCityClicked(!clicked),setClickedIndex(props.index),setClickedCity(props.indcity)}}   >
     
  <span id={props.id}>{props.indcity.name}</span>
       
          
                  
        {
        clicked &&   <Town indtown={props.indcity.towns} />} 
                   
    

    
    
    </div>
  )
}

export default City