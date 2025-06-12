import { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import './Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {

    const { cart, cartPrice, deleteFromCart, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const handleEmptyCart = () => {
        navigate("/")
    }

    const handleBuy = () => {
        navigate("/checkout")
    }

    if (cart.length === 0) {
        return (
            <div className='empty-cart'>
                <p>Aún no hay nada aquí</p>
                <button onClick={handleEmptyCart}>Ver Productos</button>
            </div>
        )
    }

    return (
        <div className='cart-container'>
            <h2>Carrito de Compras</h2>
            {
                cart.map((item) => (
                    <div className='cart-item' key={item.id}>
                        <div className='cart-img-cont'>
                            <img className='cart-img' src={item.img} alt={item.name} />
                        </div>
                        <div className='cart-text'>
                            <h4>{item.brand + " " + item.name + " " + (item.type ? item.type : "")}</h4>
                            <p>Precio unitario: US$ {item.price}</p>
                            <p>Cant: {item.amount}</p>
                        </div>
                        <p className='cart-item-price'>Total: <span className='cart-price'>US$ {item.price * item.amount}</span></p>
                        <div className='cart-item-delete'>
                            <button onClick={() => { deleteFromCart(item.id) }} className='delete-item-btn'><FontAwesomeIcon icon={faTrash} /></button>
                        </div>

                    </div>
                ))
            }
            <div className='cart-total'>
                <button onClick={clearCart} className='delete-all-btn'>Vaciar Carrito</button>
                    <h3>Total: <span className='cart-total-price'>US$ {cartPrice()}</span></h3>
                    <button onClick={handleBuy} className='cart-buy-btn'>Terminar Compra</button>
            </div>
        </div>
    )
}