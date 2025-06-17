import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return(
        <footer>
            <p className='footer-message'>¡Seguinos en nuestras redes para novedades y promociones exclusivas!</p>
            <div className='footer-social'>
                <a href='https://instagram.com' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                <a href='https://facebook.com' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                <a href='https://x.com' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
            </div>
            <p className='footer-sign'>Desarrollado por Matias Anastasio - <a href="https://matiasanastasio.netlify.app" target="_blank" rel="noreferrer">matiasanastasio.netlify.app</a></p>
            <p className='footer-disc'>Sitio creado como proyecto personal, sin fines comerciales.</p>
        </footer>
    )
}