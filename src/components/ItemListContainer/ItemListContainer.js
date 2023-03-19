import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { LoadingBar } from '../LoadingBar/LoadingBar'
import { useParams } from 'react-router-dom'
import { Categories } from '../Categories/Categories'


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    // console.log(productos)
    const {categoryId} = useParams()  

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((response) => {
                // setProductos(response)
                if(!categoryId){
                    setProductos(response)
                }else{
                    setProductos(response.filter((prod) => prod.category === categoryId)) 
                } 
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div>
            {/* <h2>Armá tu PC Fácil y Rápido</h2> */}
            {/* <Categories/> */}
            {
                loading 
                    ? <LoadingBar/>
                    : <ItemList items={productos} />  
            }
        </div>
    )
}