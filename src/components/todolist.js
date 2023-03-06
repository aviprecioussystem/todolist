import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import FormInput from './forminput'

const Todolist = () => {
    const[count,setCount]=useState(0)
    return (
        <div>
            <div>
                <nav className='nav'>
                    To Do List <sub>{count}</sub>
                </nav>
            </div>
            <br></br>

            <div>
                <FormInput />
            </div>

        </div>
    )
}

export default Todolist