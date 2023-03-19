import './Categories.scss'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {

    const navigate = useNavigate()

    const handleChange = (e) => {
        navigate('/' + e.target.value)
    }

    return (
        <div className='category-selector' onChange={handleChange}>
            <input className='category-radio' type='radio' value='' name='category' id='1' /><label className='category-label' htmlFor='1'>Mostrar Todo</label>
            <input className='category-radio' type='radio' value='cpu' name='category' id='2' /><label className='category-label' htmlFor='2'>Procesadores</label>
            <input className='category-radio' type='radio' value='gpu' name='category' id='3' /><label className='category-label' htmlFor='3'>Tarjetas Gráficas</label>
            <input className='category-radio' type='radio' value='ram' name='category' id='4' /><label className='category-label' htmlFor='4'>Memoria RAM</label>
            <input className='category-radio' type='radio' value='motherboard' name='category' id='5' /><label className='category-label' htmlFor='5'>Placas Base</label>
            <input className='category-radio' type='radio' value='storage' name='category' id='6' /><label className='category-label' htmlFor='6'>Almacenamiento</label>
            <input className='category-radio' type='radio' value='case' name='category' id='7' /><label className='category-label' htmlFor='7'>Gabinetes</label>
            <input className='category-radio' type='radio' value='psu' name='category' id='8' /><label className='category-label' htmlFor='8'>Fuentes de Poder</label>
        </div>
    )
}