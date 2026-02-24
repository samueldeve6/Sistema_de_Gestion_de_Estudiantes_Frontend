import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            {/*Logo */}
            <span className='navbar-title'>Sistema de Gestión de Estudiantes</span>
        </div>
        <div className='navbar-center'>
            <input className='navbar-search' type="text" placeholder="Buscar..." />
        </div>
        <div className='navbar-right'>
            {/* Icono de notificaciones */}
            {/* foto y nombre de usuario */}
            <span className='navbar-user'>Hola Usuario</span>
            {/* Aquí puedes agregar un avatar o icono de usuario */ }
            <img className='navbar-avatar' src="https://via.placeholder.com/40" alt="Avatar" />
        </div>
    </nav>
  )
}

export default Navbar