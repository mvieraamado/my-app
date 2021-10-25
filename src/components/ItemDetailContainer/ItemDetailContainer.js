import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getProduct } from '../../services/firebase/firebase';
import { Spinner } from '../Spinner/Spinner';

const ItemDetailContainer = ()=> {
    const { name } = useParams();
    const [, setLoading] = useState(true);
    const [product, setProduct] = useState(undefined);

    useEffect (()=>{
        setLoading(true)
        getProduct(name).then(product=>{
            setProduct(product)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
        return (()=>{
            setLoading(true)
            setProduct(undefined)
        })
    },[name])
    
    return (
        <div>
            {product === undefined ? <Spinner/> : <ItemDetail item={product}/>}
        </div>
    )
}
export default ItemDetailContainer;