import { Item } from '../Item/Item'
import './ItemList.scss'

export const ItemList = ({ items }) => {

    return (
        <div>
            <div className="itemlist">
                {items.map((producto) => <Item key={producto.id} item={producto} />)}
            </div>
        </div>
    )
}