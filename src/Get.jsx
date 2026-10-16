import axios  from "axios"

function Get() {
    function show(){
        axios.get("http://localhost:3000/user")
        .then((response)=>{
            console.log(response)//object
            console.log(response.data)//array of data
            
        })
        .catch((err)=>{
            console.log(err)
        })

    }
  return (
    <div>Get
        <br/>
<button onClick={show}>View</button>
    </div>
  )
}

export default Get