import { useState } from "react"

const Counter = ()=>{
    const [count, setCount] = useState(0)

    return(
        <div>
            <div>{count}</div>
            <button onClick= {()=> setCount(count - 1)}>-</button>
            <button onClick= {()=> setCount( count + 1)}>+</button>
        </div>
    )
}

export default Counter