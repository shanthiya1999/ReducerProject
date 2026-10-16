import React from 'react'
import {useRef} from 'react'
function Ref() {
   const nameref= useRef()
   console.log(nameref)
  return (
    <div>
       Name: <input type="text" ref={nameref} />
       <button onClick={()=>{console.log(nameref.current.value)}}>Click</button>
    </div>
  )
}

export default Ref