import './CartWidget.scss'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react';
import { CartContext } from '../../contex/CartContext';
import { Link, useLocation } from 'react-router-dom';




export const CartWidget = () =>{

    const location = useLocation()
    const inCart = location.pathname === '/cart'

    const {cartAmount} = useContext(CartContext)


    return(
        <div className={`cart-widget ${inCart||cartAmount()==0 ? "hide": ""}`}>
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

