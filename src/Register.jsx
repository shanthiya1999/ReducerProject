import { useState } from "react"
import axios from 'axios'
function Register() {
    let[name,setname]=useState("")
    let[nameerr,setnameerr]=useState(false)
    let[success,setsuccess]=useState(false)
    

    function chnge(event){
        setnameerr(false)
        setname(event.target.value)
    }
    function send(){
        if(name==""){
            setnameerr(true)
        }else{
            setnameerr(false)
            axios.post("http://localhost:3000/user",{username:name})
            .then(function (response){
                setsuccess(true)
                setname("")
                setTimeout(()=>{
                    setsuccess(false)
                },2000)
                console.log(response)
                console.log(response.data)
                console.log(response.status)
            })
            .catch((err)=>{
                console.log(err)
            })
        }    
    }
    
    
    return (
        <div>
            <h2>Register Component</h2>
            Name:
            <input type="text" value={name} onChange={chnge}/>
           {nameerr && <p style={{color:"red"}}>Please fill the field</p>}
            <br/>
            <button onClick={send}>Send</button>
           {success && <p style={{color:"green"}}>Successfully submitted</p>}
        </div>
    )
}

export default Register