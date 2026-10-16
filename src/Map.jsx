import { useState } from "react"

function Map() {
   const[fruits,setfruits]= useState([{
                                        name:"Apple",
                                    id:1},
                                    {name:"Orange",
                                        id:2},
                                        {name:"Papaya",
                                        id:3}])
   
  return (
    <div>
        <ul>
            {fruits.map((a,index)=>{
                return <li key={a.id}>{index+1}
                
                {a.name}</li>

            })}
        </ul>
    </div>
  )
}

export default Map