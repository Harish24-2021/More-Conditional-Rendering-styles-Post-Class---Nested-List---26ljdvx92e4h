import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {

  const[stateClicked,setStateClicked]=useState(false)
  const[cityClicked,setCityClicked]=useState(false)
  const[stateIndex,setStateIndex]=useState()
  const[cityIndex,setCityIndex]=useState()

  // var stateIndex
  // var cityIndex
  return <div id="main">


    {/* //looping states array, display 4 states name  */}
    {states.map((state,index)=>{
              let id=`state${index+1}`
              //  stateIndex =index
      return   <div  key={id}  style={{color:"red"}} id={id}  onClick={()=>{setStateClicked(!stateClicked),setStateIndex(index)}} > {state.name} </div>

    })}

        {/*clicked state cities array mapped, display city names in that state  */}
       { stateClicked &&  states[stateIndex].cities.map((city,index)=>{
         let cityid=`city${index+1}`
          // cityIndex = index
        return              <div key={cityid} style={{color:"blue"}} id={cityid} onClick={()=>{setCityClicked(!cityClicked), setCityIndex(index)}}>{city.name}   </div>
       })}
{/* clikced city towns array is mapped, display town names in that state */}
                { stateClicked&&  cityClicked &&  states[stateIndex].cities[cityIndex].towns.map((town,index)=>{
                  let townid=`town${index+1}`
                  return <div key={townid} style={{color:"green"}} id={townid} >{town.name}</div>
                })}
                
                
                
      
      
      
        
        
        
    
  </div>;
}
//states loop ->4 items ->item name is state name 
// select one item , loop its cities names 
export default App;
