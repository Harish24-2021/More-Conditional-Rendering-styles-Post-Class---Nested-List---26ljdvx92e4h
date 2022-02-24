import React from 'react'

function Town(props) {
  return (
      <div>
 <ol>{props.indtown.map((town,index)=>{ 

    return <li id={`town${index+1}`}  >{town.name}</li>

 })}</ol>
  </div>
  )
}

export default Town