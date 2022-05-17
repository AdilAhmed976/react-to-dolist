import React, { useState } from "react";

export const Counter = ({initialValue}) => {

    const [count, setCount] = useState(initialValue)
    
    return (
        <div>
            <h1>Counter : { count } </h1>

            <button onClick= {()=> setCount (count+1)} >Increment</button>
            <button onClick= {()=> setCount (count-1)}  >Decrement</button>
        </div>
    )
}
