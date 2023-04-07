import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) =>{



    const [cart, setCart] = useState(init)

	const addToCart = (item)=>{
		setCart([...cart,item])
	}

	const isInCart = (id)=>{
		return cart.some((prod)=>prod.id===id)
	}

	const cartAmount = ()=>{
		return cart.reduce((acc,prod) => acc + prod.amount,0)
	}

    const cartPrice = ()=>{
        return cart.reduce((acc,prod)=>acc+ prod.amount*prod.price,0)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const deleteFromCart=(id)=>{
        setCart(cart.filter((prod)=>prod.id!==id))
    }

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    // const addAmount=(item)=>{
    //     console.log(cart.indexOf(item))
    //     cart.splice(cart.indexOf(item),1,{...item,amount:item.amount+1})
    //     console.log(cart)
    // }


    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartAmount,
            cartPrice,
            clearCart,
            deleteFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}