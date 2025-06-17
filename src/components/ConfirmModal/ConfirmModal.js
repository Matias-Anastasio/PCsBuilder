import './ConfirmModal.scss'

export const ConfirmModal = ({msg, onConfirm, onCancel}) =>{
    return(
        <div className='lock-modal'>
            <div className='confirm-modal'>
            <p>{msg}</p>
            <div className='confirm-buttons'>
                <button onClick={onConfirm} className='confirm'>Eliminar</button>
                <button onClick={onCancel} className='cancel'>Cancelar</button>
            </div>
        </div>
        </div>
    )
}