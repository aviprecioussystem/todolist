import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Showhidetask from './showhidetask'

let nextId = 0
const TodoInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [listInputValue, setListInputValue] = useState([])
  const [showActive, setSHowActive] = useState(false)
  const refFocus = useRef(null)

  const changeVal = (e) => {
    setInputValue(e.target.value)
  }
  const listUpperCase = () => {
    setInputValue(inputValue.toUpperCase())
  }
  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
    setListInputValue([...listInputValue, { id: nextId++, inputValue: inputValue,completed }])
    setInputValue('')
  }
  const handelTaskOnClick=(v)=>{
    listInputValue.filter(v => !v.completed);
  }

  return (
    <>
      <div>
        <nav className='nav'>
          To Do List
        </nav>
      </div>
      <div className='container-fluid'>
        <br></br>
        <div>
          <form onSubmit={handlerSubmit} className='d-flex justify-content-between'>
            <input value={inputValue} onChange={changeVal} onKeyUp={listUpperCase} placeholder='Type to add a new task' ref={refFocus} className='w-100' />
            <button disabled={!inputValue}>ADD TASK</button>
          </form>
        </div>
        <br></br>
        <div>
          <Showhidetask />
        </div>

        <div>
          {listInputValue.map((v) => {
            return (
              <p key={v.inputValue} >
                <input type='checkbox' checked={showActive && "checked"} onChange={(e) => handelTaskOnClick(v.id)} />
                {v.inputValue}
                <button onClick={() => setListInputValue((listInputValue.filter(a =>
                  a.id !== v.id
                )))}>x</button>
              </p>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default TodoInput