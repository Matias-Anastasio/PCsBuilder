import './Navbar.scss'
import {CartWidget} from '../CartWidget/CartWidget.js'
import { Link, NavLink } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';


export const Navbar = () => {

    const [list, setList] = useState("")

    const handleList = (value) =>{
        setList(value)
    }

    return(
        <header>
                <div>
                <NavLink to="/" className='logo'><h1>PC<span>s</span>Builder</h1></NavLink>
                <nav>
                    <ul>
                        <li className='productos' onClick={()=>{handleList("hide")}} onMouseOver={()=>{handleList("show")}} onMouseOut={()=>{handleList("hide")}}><Link to="/" className='navbar-link'>Todos los Productos <MdKeyboardArrowDown/></Link>
                            <ul className={`categories ${list}`}>
                                <Link className='category-link' to="/productos/cpu"><li>Procesadores</li></Link>
                                <Link className='category-link' to="/productos/gpu"><li>Tarjetas Gráficas</li></Link>
                                <Link className='category-link' to="/productos/ram"><li>Memoria RAM</li></Link>
                                <Link className='category-link' to="/productos/motherboard"><li>Placas Base</li></Link>
                                <Link className='category-link' to="/productos/storage"><li>Almacenamiento</li></Link>
                                <Link className='category-link' to="/productos/case"><li>Gabinetes</li></Link>
                                <Link className='category-link' to="/productos/psu"><li>Fuentes de Poder</li></Link>
                            </ul>
                        </li>
                        {/* <li><NavLink to="/contacto" className={({isActive})=> (isActive ? 'active navbar-link' : 'normal navbar-link')}>Contacto</NavLink></li> */}
                    </ul>
                    <CartWidget/>

                </nav>
                </div>
                
        </header>
        
    )
}