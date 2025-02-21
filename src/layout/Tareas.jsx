import React from 'react'
import { Outlet } from 'react-router-dom'

const Tareas = () => {

    function add_tks() {

        try {
            var tarea = document.getElementById('tar');
            console.log(tarea)
            return tarea
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <>

            <div id='form-task' >
                <form action="" name='formulario-tarea'>
                    <div name='form-agregar'>
                        <label htmlFor="">Ingresa su tarea</label>
                    </div>
                    <div id='form-tarea'>
                        <input type='text' id='tar' name='tar' />
                    </div>
                </form>

            </div>
            <div name='agregar-tsk'>
                <button type='submit' onClick={add_tks()} id='folder'>Agregar</button>
            </div>


                <table>
                    <thead >
                        <tr>
                            <th>

                            </th>
                        </tr>
                    </thead>
                </table>



            <Outlet />
        </>
    )
}

export default Tareas