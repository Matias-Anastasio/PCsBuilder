import './ItemCount.scss'


export const ItemCount = ({max, amount, setAmount}) => {

    const handleSubtract = (e) =>{
        amount > 1 && setAmount(amount - 1)
    }

    const handleAdd = (e) =>{
        amount < max && setAmount(amount + 1)
    }

    return (
        <div className="itemCount">
            <button className={`itemCount-btn ${amount===1 ? 'btn-disabled':''}`} onClick={handleSubtract} disabled={amount===1}>-</button>
            <p>{amount}</p>
            <button className={`itemCount-btn btn-active ${amount===max ? 'btn-disabled':''}`}onClick={handleAdd} disabled={amount===max}>+</button>
        
        </div>
    )
}