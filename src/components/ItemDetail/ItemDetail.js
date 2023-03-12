import './ItemDetail.scss'
import { useNavigate } from "react-router-dom"

export const ItemDetail = ({item}) =>{

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(-1)
    }

    return(
        <div className='item-detail'>
            <button className='back-button' onClick={handleClick}> {"<"} Volver</button>
            <div className='item-card'>
                <img src={item.img} alt={item.name}/>
                <span className='line'/>
                <div className='item-card-text'>
                    <h2>{item.brand + " " + item.name + " " + (item.type ? item.type : "")}</h2>
                    <p className='item-desc'>{item.desc}</p>
                    <p className='item-price'>Precio Final: <span className='price'>US$ {item.price}</span> + Costo de Envío <span className='envio'>(Calcular Envío)</span></p>
                    <button className='add-button'>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}