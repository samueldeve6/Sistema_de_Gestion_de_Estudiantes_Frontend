import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Estudiantes from './pages/Estudiantes.jsx'
import Cursos from './pages/Cursos.jsx'
import Profesores from './pages/Profesores.jsx'
import Calificaciones from './pages/Calificaciones.jsx'
import Reportes from './pages/Reportes.jsx'
import Configuracion from './pages/Configuracion.jsx'
import { useState } from 'react'
import StudentList from './components/StudentList.jsx'
import Sidebar from './components/Sidebar.jsx'
import './App.css'


function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <div className='App'>
          <Sidebar />
          <div className='page-content'>
          <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/estudiantes' element={<Estudiantes />} />
            <Route path='/cursos' element={<Cursos />} />
            <Route path='/profesores' element={<Profesores />} />
            <Route path='/calificaciones' element={<Calificaciones/>} />
            <Route path='/reportes' element={<Reportes/>} />
            <Route path='/configuracion' element={<Configuracion/>} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
