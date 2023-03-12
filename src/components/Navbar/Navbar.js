import './Navbar.scss'
import {CartWidget} from '../CartWidget/CartWidget.js'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

    return(
        <header>
                <div>
                <NavLink to="/" className='logo'><h1>PCsBuilder</h1></NavLink>
                <nav>
                    <ul>
                        <li><NavLink to="/componentes" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>Componentes</NavLink></li>
                        <li><NavLink to="/" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>PCs Armadas</NavLink></li>
                        <li><NavLink to="/" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>Novedades</NavLink></li>
                    </ul>
                    <CartWidget/>
                </nav>
                </div>
                
        </header>
        
    )
}