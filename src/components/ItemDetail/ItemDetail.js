import './ItemDetail.scss'
import { useNavigate } from "react-router-dom"
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'

export const ItemDetail = ({item}) =>{

    const [amount, setAmount] = useState(1)

    const navigate = useNavigate()

    const handleBack = () =>{
        navigate(-1)
    }

    return(
        <div className='item-detail'>
            <button className='back-button' onClick={handleBack}> {"<"} Volver</button>
            <div className='item-card'>
                <img src={item.img} alt={item.name}/>
                <span className='line'/>
                <div className='item-card-text'>
                    <h2>{item.brand + " " + item.name + " " + (item.type ? item.type : "")}</h2>
                    <p className='item-desc'>{item.desc}</p>
                    <p className='item-price'>Precio Final: <span className='price'>US$ {item.price}</span></p>
                    <p className='item-stock'>{item.stock>1 ? `Cantidad disponible: ${item.stock} unidades`: '¡Último disponible!'}</p>
                    {item.stock > 1 ? <ItemCount max={item.stock} amount={amount} setAmount={setAmount}/> : ""}
                    <button className='add-button'>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}