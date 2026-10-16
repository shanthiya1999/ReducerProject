function reducer(state,a) {
    console.log(a)
    switch (a.type){
        case "deposit":
            return state+a.payload
        case "withdraw":
            return state-a.payload
        case "clear":
            return a.payload
        default:
            return state
    }

}
import { useReducer } from "react"


function Reducer() {
    const [data, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            {data}
            <br/>
            <button onClick={() => {
                dispatch({
                    type: "deposit",
                    payload: 500
                })
            }}>Deposit with 500</button>
            <button onClick={() => {
                dispatch({
                    type: "withdraw",
                    payload: 500
                })
            }}>withdraw with 500</button>
            <button onClick={() => {
                dispatch({
                    type: "clear",
                    payload: 0
                })
            }}>Clear</button>

        </div>
    )
}

export default Reducer