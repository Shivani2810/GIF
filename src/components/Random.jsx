
import React , {useState} from 'react'

const Random=()=>{
  const [gif,setgif]=useState('');



function clickHandler(){
         
}



  return (
    <div className="w-full bg-green-500 rounded-lg border-lg border-black">
      <h1 className='text-2xl underline uppercase font-bold '>Random GIF</h1>
      <img src={gif} width="450"/>
      <button onClick={clickHandler}>Generate</button>
    </div>
  )
}
export default Random
