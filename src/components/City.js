import React,{useState} from 'react'
import Town from './Town'

function City(props) {
    console.log(props.stateId)
    const[clicked,setClicked]=useState(false)
    const[clickedIndex,setClickedIndex]=useState()
    const[clickedCity,setClickedCity]=useState()

    console.log(clickedCity)
  return (
    <div>
     
       <li onClick={()=>{setClicked(!clicked),setClickedIndex(props.index),setClickedCity(props.indcity)}} id={`city${props.index+1}`}  >  {props.indcity.name}
       
        </li>
          
                  
        {
        clicked && props.index==clickedIndex  && props.indcity==clickedCity &&   <Town indtown={props.indcity.towns} />} 
                   
    

    
    
    </div>
  )
}

export default City