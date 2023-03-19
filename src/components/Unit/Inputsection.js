import React from 'react'





function Inputsection(props) {

  function updatevalues(e) {
    
  }

  let vall = props.val; 
  return (
    <div className='unitname-wrapper'>
        <label className='unitname'>{props.unitname}</label>
        <input type="number" defaultValue={vall} placeholder={props.unitname} className="input" onChange={(e)=> updatevalues(e)}></input>
    </div>
  )
}

export default Inputsection