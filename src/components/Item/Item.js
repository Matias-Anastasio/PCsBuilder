import './item.scss'

export const Item = ({ item }) => {

    return (
        <div className='item'>
            <img src={item.img} alt={item.name} />
            <div>
                <h4>{item.brand + " " + item.name + " " + (item.type ? item.type : "")}</h4>
                <p className='desc'>{item.desc}</p>
                <p className='price'>US${item.price}</p>
            </div>
        </div>
    )
}