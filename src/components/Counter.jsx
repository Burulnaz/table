import React from 'react'


const Counter = (props) => {
    console.log(props)
  return (
    <div>
        <h3>task-1 </h3>
      <h5>{props.counter}</h5>
      <button className='btn1' onClick={props.decrement}></button>
      <button className='btn2' onClick={props.increment}></button>
    </div>
  )
}

export default Counter