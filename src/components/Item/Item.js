import { Link } from 'react-router-dom'
import './item.scss'

export const Item = ({ item }) => {

    return (
        <Link to={"/item/"+item.id} className='item'>
            <img src={item.img} alt={item.name} />
            <div className='item-text'>
                <h4>{item.brand + " " + item.name + " " + (item.type ? item.type : "")}</h4>
                <p className='desc'>{item.desc}</p>
                <p className='price'><span>US$</span>{item.price}</p>
            </div>
        </Link>
    )
}