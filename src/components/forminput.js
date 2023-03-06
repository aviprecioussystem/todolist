import React, { useRef, useState ,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Showhidetask from './showhidetask'

let nextId = 0
const FormInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [listInputValue, setListInputValue] = useState([])
  const [showActive, setShowActive] = useState(true)
  const refFocus = useRef(null)
  const [completed, setCompleted] = useState(false)
  const [count, setCount] = useState(0)

  const changeVal = (e) => {
    setInputValue(e.target.value)
  }
  const listUpperCase = () => {
    setInputValue(inputValue.toUpperCase())
  }
  const handlerSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
    setListInputValue([...listInputValue, { id: nextId++, inputValue: inputValue, completed: false }])
    setInputValue('')
  }
  const handleTaskOnclick = () => {
    setShowActive(!showActive)
    inputSubmit()
  }
  const inputSubmit = () => {
    listInputValue.filter(v => !completed)
  }
  const addC = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div>
        <nav className='nav'>
          To Do List <sub>{count}</sub>
        </nav>
      </div>
      <div className='container-fluid'>
        <br></br>
        <div>
          <form onSubmit={handlerSubmit} className='d-flex justify-content-between'>
            <input value={inputValue} onChange={changeVal} onKeyUp={listUpperCase} placeholder='Type to add a new task' ref={refFocus} className='w-100' />
            <button disabled={!inputValue} onClick={addC}>ADD TASK</button>
          </form>
        </div>
        <br></br>

        <div className='d-flex justify-content-between container-fluid'>
          Show/hide task
          <button onClick={handleTaskOnclick}>{showActive ? 'Show Task' : 'Hide Task'}</button>
        </div>

        <div>
          {listInputValue.map((v) => {
            return (
              <p key={v.inputValue} >
                <input type='checkbox' completed onChange={inputSubmit} />
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
export default FormInput