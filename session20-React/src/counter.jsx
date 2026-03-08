import { useState } from "react"


export const Counter =()=>{
    // let count = 0
    // let state = useState(0) // return array [currentValue , setterFunc]
    // let num = state[0]
    // let setNum = state[1]

    // let [num , setNum] = useState(0)

   function CounterFun(type){
    count++
    console.log(count)
    console.log(type)

    }

    return (
        <>
            <h2>Counter {count}</h2>
            <button onClick={()=>{CounterFun("click")}}>Increment</button>

        </>
    )
}