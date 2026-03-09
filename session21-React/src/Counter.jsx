import { useState } from "react"



export const Counter = ()=>{
    // let count = 0

    // useState(inialValue) ==> [CurrentValue , SetterFunc]
//    let state =  useState(0)
//    let count = state[0]
//    let setCount = state[1]
   let [count , setCount ] = useState(0)
   let userName = "Ahmed"


    function increment(){
        // count++
        // console.log(count)
        setCount(count+1)
    }
    return (
        <>
        <h2 className="text-blue">Counter {count}</h2>
        <button onClick={increment}>Increment</button>
        <h2>welcome {userName}</h2>
        </>
    )

}