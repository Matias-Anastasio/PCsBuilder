import carrito from './carrito.png'
import './CartWidget.scss'


export const CartWidget = () =>{

    return(
        <div className='cart-container'>
                <img src={carrito} alt="carrito de compras"/>
                <p className='cart-number'>0</p>
        </div>
    )
}

