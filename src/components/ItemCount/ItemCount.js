import { useState } from "react";

const Counter = ({props, onConfirm})=>{
    const [count, setCount] = useState(0)
     
    const RestarContador = ()=>{
        if (count > 0){
        setCount(count -1)
    }};
    
    const Sumar = ()=>{
        if(count < props.stock){ 
            setCount(count +1)
        }
    }


    return(
        <div className="d-flex justify-content-center flex-column">
            <div>
                <p>{count}</p>
                <button onClick= {RestarContador} className="btn btn-secondary m-2">-</button>
                <button onClick= {Sumar} className="btn btn-secondary m-2">+</button>
            </div>
            <div>
                <button onClick={()=> onConfirm(count)} className="btn btn-secondary">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter