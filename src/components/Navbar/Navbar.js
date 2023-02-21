import './Navbar.scss'
import {CartWidget} from '../CartWidget/CartWidget.js'


export const Navbar = () => {

    return(
        <header>
                <div>
                <h1>PCsBuilder</h1>
                <nav>
                    <ul>
                        <li><a href="#">Componentes</a></li>
                        <li><a href="#">PCs Armadas</a></li>
                        <li><a href="#">Novedades</a></li>
                    </ul>
                    <CartWidget/>
                </nav>
                </div>
                
        </header>
        
    )
}