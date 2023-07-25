import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import formReducer from './reducer/formReducer'

const initialState = {
  firstName: "wale",
  lastName: "okunlola",
  email: "akinwaleokunlo@gmail.com",
  password: "123456",
}

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [showText, setShowText] = useState(1)

  function changeFirstName (e){
    dispatch({type: "change_First", payload: e.target.value})
  }

  function changeLastName (e){
    dispatch({type: "change_last", payload: e.target.value})
  }

  function changeEmail (e){
    dispatch({type: "change_email", payload: e.target.value})
  }

  function changePassword (e){
    dispatch({type: "change_password", payload: e.target.value})
  }

  function nextToState() {
   setShowText(showText + 1)
  }

  return (
 
      <div className='App'>
       <form>
        {showText === 1 && (
          <div>
        <label>first Name</label>
        <input onInput={changeFirstName} value={state.firstName}/>
        </div>
        )}
        {
          showText === 1 && (
            <div>
        <label>last Name</label>
        <input onInput={changeLastName} value={state.lastName}/>
        </div>
          )
        }
        {
        showText === 2 && (
          <div>
           <label>email</label>
      <input onInput={changeEmail} value={state.email}/>
        </div>
        )}

        {
          showText === 2 && (
            <div>
          <label>passWord</label>
        <input type='password' onInput={changePassword} value={state.password}/>
        </div>
          )
        }
         
        </form>
        {showText === 1 && <button onClick={nextToState}>next</button> }
       
        {showText === 2 && <button onClick={nextToState}>next</button> }

       {showText === 3 && (
        <div>
        <p>{state.firstName}</p>
        <p>{state.lastName}</p>
        <p>{state.email}</p>
        <p>{state.password}</p>
        </div>

       )}
       
      </div> 

      

  )
}

export default App
