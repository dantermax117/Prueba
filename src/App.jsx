import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { useState } from 'react'
import './App.css'

import Tareas from './layout/Tareas'
import Arreglo_junto from './layout/Arreglo_junto'
import Posicion from './layout/Posicion'
import Posicion_compresion from './layout/Posicion_compresion'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tareas/>}>
            <Route index element={<Arreglo_junto/>} />
            <Route path='posicion_compresion' element={<Posicion_compresion/>}/>
            <Route path='posicion' element={<Posicion/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
