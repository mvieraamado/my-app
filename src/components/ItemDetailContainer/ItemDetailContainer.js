import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getDoc, doc } from '@firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemDetailContainer = ()=> {
    const { name } = useParams();
    console.log(name);
    const [ loading, setLoading] = useState(true);
    const [products, setListClothes] = useState(undefined);

    useEffect (()=>{
        setLoading(true)
        getDoc(doc(db, 'collection', name)).then((querySnapshot)=> {
            console.log({id: querySnapshot.id, ...querySnapshot.data()})
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setListClothes(product)
        }).catch((error)=> {
            console.log('Error searching', error)
        }).finally(()=>{
            setLoading(false)
        })
        return (()=>{
            setListClothes(undefined)
        })
    },[name])
    console.log(products);
    
    return (
        <div>
            {products === undefined ? <h1>Loading...</h1> : <ItemDetail item={products}/>}
        </div>
    )
}
export default ItemDetailContainer;