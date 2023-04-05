import './Navbar.scss'
import {CartWidget} from '../CartWidget/CartWidget.js'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

    return(
        <header>
                <div>
                <NavLink to="/" className='logo'><h1>PC<span>s</span>Builder</h1></NavLink>
                <nav>
                    <ul>
                    {}
                        <li className='productos'><Link to="/" className='navbar-link'>Todos los Productos ▼</Link>
                            <ul className='categories'>
                                <Link className='category-link' to="/cpu"><li>Procesadores</li></Link>
                                <Link className='category-link' to="/gpu"><li>Tarjetas Gráficas</li></Link>
                                <Link className='category-link' to="/ram"><li>Memoria RAM</li></Link>
                                <Link className='category-link' to="/motherboard"><li>Placas Base</li></Link>
                                <Link className='category-link' to="/storage"><li>Almacenamiento</li></Link>
                                <Link className='category-link' to="/case"><li>Gabinetes</li></Link>
                                <Link className='category-link' to="/psu"><li>Fuentes de Poder</li></Link>
                            </ul>
                        </li>
                        <li><NavLink to="/contacto" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>Contacto</NavLink></li>
                    </ul>
                    <CartWidget/>
                    
                </nav>
                </div>
                
        </header>
        
    )
}