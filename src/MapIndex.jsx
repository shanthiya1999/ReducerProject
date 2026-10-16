import { useState } from 'react'


function MapIndex() {
    const [fruits, setFruits] = useState([
        {
            id:'a',
            fruit:"apple"
        },
        {
            id:'b',
            fruit:"banana"
        },
        {
            id:'c',
            fruit:"orange"
        }
    ])
    function handle(){
        setFruits(fruits.filter(item => item.id !== 'b'))
    }
  return (
    <div>
        {fruits.map((item,index) => {
            return <h2 key={index}>{index}-{item.id}-{item.fruit}</h2>
               
               
           
        })}
         <button onClick={handle}>Delete</button>
     
    </div>


  )
}


export default MapIndex
