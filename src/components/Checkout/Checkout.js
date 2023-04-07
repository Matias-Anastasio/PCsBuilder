import './Checkout.scss'
import { CartContext } from '../../contex/CartContext';
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const Checkout = () => {

    const navigate= useNavigate()

    const { cart , cartPrice, clearCart } = useContext(CartContext)

    const [errorMsg, setErrorMsg] = useState("")

    const [orderId, setOrderId] = useState(null)
    
    const [values, setValues] = useState({
        name:'',
        dir:'',
        email:''
    })
    
    const handleInputChange =(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrorMsg("")
        if(values.name.length<4){
            setErrorMsg("Nombre Inválido")
            return
        }
        if(values.dir.length<4){
            setErrorMsg("Dirección Invalida")
            return
        }
        if(!values.email.includes('@')){
            setErrorMsg("Email Inválido")
            return
        }
        const order = {
            client: values,
            items: cart.map((item)=>({id:item.id, name:item.name, price:item.price, amount:item.amount})),
            total: cartPrice(),
            date: new Date()
        }

        const ordersRef = collection(db,'orders')

        addDoc(ordersRef,order)
            .then((doc)=>{
                setOrderId(doc.id)
                clearCart()
            })
    }

    if(orderId){
        return(
            <div className='checkout'>
                <div className='end-checkout'>

                <h2 className='end-checkout-title'>¡Gracias por tu Compra!</h2>
                <p className='end-checkout-msg'>Tu código de orden: <span>{orderId}</span></p>
                <button className='end-checkout-btn' onClick={()=>{navigate('/')}}>Volver al Inicio</button>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <div className='checkout'>
            <div className='form-container'>
                <h2>Ingresá tus datos</h2>
                <form>
                    <div>
                        <input onChange={handleInputChange} value={values.name} type='text' className='form-input' placeholder='Nombre' name='name' />
                        <input onChange={handleInputChange} value={values.dir} type='text' className='form-input' placeholder='Dirección' name='dir' />
                        <input onChange={handleInputChange} value={values.email} type='email' className='form-input' placeholder='Email' name='email' />
                    </div>
                    
                    <button onClick={handleSubmit} type='submit' className='form-btn'>Enviar</button>
                    <p>{errorMsg}</p>
                </form>
            </div>
        </div>
    )
}