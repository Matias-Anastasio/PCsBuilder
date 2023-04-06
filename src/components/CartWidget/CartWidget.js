import './CartWidget.scss'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import { Link } from 'react-router-dom';


export const CartWidget = () =>{

    const {cartAmount} = useContext(CartContext)

    return(
        <div className='cart-widget'>
                <Link className='cart-link' to="/cart" >
                    <AiOutlineShoppingCart className='cart-icon'/>
                    {
                        cartAmount()
                            ? <p className='cart-number'>{cartAmount()}</p>
                            : ""
                    }
                </Link>
        </div>
    )
}

