import { useNavigate } from 'react-router-dom'
import './Hero.scss'

export const Hero = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/productos')
    }

    return (
        <div className='hero'>
            <h2 className='hero-title'>Armá tu PC Fácil y Rápido</h2>
            {/* <button onClick={handleClick} className='hero-button'>Ver Productos</button>
            <div>
                <p>También podes seguirnos en:</p>
                <div>
                    <img src='../imgs/instagram.png' alt='instagram logo' />
                    <img src="../imgs/facebook.png" alt='facebook logo' />
                </div>
            </div> */}
        </div>
    )
}