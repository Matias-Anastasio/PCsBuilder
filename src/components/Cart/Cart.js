import { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import './Cart.scss';
import {RxCross1} from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

export const Cart =()=>{

    const {cart, cartPrice, deleteFromCart, clearCart} = useContext(CartContext)

    const navigate = useNavigate()

    const handleEmptyCart =()=>{
        navigate("/")
    }

    if(cart.length===0){
        return(
            <div className='empty-cart'>
                <p>Aún no hay nada aquí</p>
                <button onClick={handleEmptyCart}>Ver Productos</button>
            </div>
        )
    }

    return(
        <div className='cart-container'>
            <h2>Carrito de Compras</h2>
            {
                cart.map((item) =>(
                    <div className='cart-item' key={item.id}>
                        <div className='cart-img-cont'>
                            <img className='cart-img' src={item.img} alt={item.name}/>
                        </div>
                        <div className='cart-text'>
                            <h4>{item.brand + " " + item.name + " " + (item.type ? item.type : "")}</h4>
                            <p>Precio unitario: US$ {item.price}</p>
                            {/* <p>stock: {item.stock}</p> */}
                        </div>
                        {/* <div className='cart-amount'>
                            <p>Cantidad: </p>
                            <button className='cart-amount-btn'>-</button>
                            <p>{item.amount}</p>
                            <button onClick={()=>{addAmount(item)}} className='cart-amount-btn'>+</button>
                        </div> */}
                            <p>Precio total: <span className='cart-price'>US$ {item.price*item.amount}</span></p>
                        <div>
                            <button onClick={()=>{deleteFromCart(item.id)}} className='delete-item-btn'><RxCross1/></button>
                        </div>

                    </div>
                ))
            }
            <div className='cart-total'>
                <button onClick={clearCart} className='delete-all-btn'>Vaciar Carrito</button>
                <div>
                    <h3>Total: <span className='cart-total-price'>US$ {cartPrice()}</span></h3>
                    <button className='cart-buy-btn'>Terminar Compra</button>
                </div>
            </div>
        </div>
    )
}