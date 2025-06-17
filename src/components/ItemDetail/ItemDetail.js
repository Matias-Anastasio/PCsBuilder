import './ItemDetail.scss'
import { Link, useNavigate } from "react-router-dom"
import { ItemCount } from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../contex/CartContext'

export const ItemDetail = ({ item }) => {

    const { addToCart, isInCart } = useContext(CartContext)

    const [amount, setAmount] = useState(1)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1);
        setTimeout(() => window.scrollTo(0, 0), 0);
    };


    const handleAddCart = () => {
        const newItem = {
            ...item,
            amount
        }
        addToCart(newItem)
    }

    return (
        <div className='item-detail'>
            <button className='back-button' onClick={handleBack}> {"<"} Volver</button>
            <div className='item-card'>
                <img src={item.img} alt={item.name} />
                <span className='line' />
                <div className='item-card-text'>
                    <h2>{item.brand + " " + item.name + " " + (item.type ? item.type : "")}</h2>
                    <p className='item-desc'>{item.desc}</p>
                    <p className='item-price'>Precio Final: <span className='price'>US$ {item.price}</span></p>
                    {
                        isInCart(item.id)
                            ? <div className='item-links'>
                                <Link to='/' className='cart-link'>Ver Mas Productos</Link>
                                <Link to="/cart" className='cart-link' >Ir al Carrito</Link>
                            </div>
                            : <div className='item-stock-container'>
                                <p className='item-stock'>{item.stock > 1 ? `Cantidad disponible: ${item.stock} unidades` : '¡Último disponible!'}</p>
                                {item.stock > 1 ? <ItemCount max={item.stock} amount={amount} setAmount={setAmount} /> : ""}
                                <button onClick={handleAddCart} className='add-button'>Agregar al Carrito</button>

                            </div>
                    }
                </div>
            </div>
        </div>
    )
}