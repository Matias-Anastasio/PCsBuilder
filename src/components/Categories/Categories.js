import { useState } from 'react'
// import { Link } from 'react-router-dom'
import './Categories.scss'
import { NavLink } from 'react-router-dom'

export const Categories = () => {
    return (
        <div className='category-selector'>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/">Mostrar Todo</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/cpu">Procesadores</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/gpu">Tarjetas Gráficas</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/ram">Memoria RAM</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/motherboard">Placas Base</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/storage">Almacenamiento</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/case">Gabinetes</NavLink>
            <NavLink className={({isActive}) => (isActive ? "activeLink category-link" : "normalLink category-link")} to="/componentes/psu">Fuentes de Poder</NavLink>

        </div>
    )
}