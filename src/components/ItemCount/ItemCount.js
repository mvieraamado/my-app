import { useState } from "react";

const Counter = ({props})=>{
    const [count, setCount] = useState(0)
     
    const RestarContador = ()=>{
        if (count === 0){
        console.log('nada');
    }else{
        setCount(count -1);
    }};
    
    const Sumar = ()=>{
        if(count === props.stock){
            console.log('nada')
        }else{
            setCount(count +1)
        }
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick= {RestarContador}>-</button>
            <button onClick= {Sumar}>+</button>
        </div>
    )
}

export default Counter