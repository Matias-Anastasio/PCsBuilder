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
                        <li><NavLink to="/productos" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>Productos</NavLink></li>
                        <li><NavLink to="/armatupc" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>Armá tu PC</NavLink></li>
                        <li><NavLink to="/perifericos" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>Periféricos</NavLink></li>
                    </ul>
                    <CartWidget/>
                </nav>
                </div>
                
        </header>
        
    )
}