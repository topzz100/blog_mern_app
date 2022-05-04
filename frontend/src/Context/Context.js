import React, { createContext, useEffect, useReducer, useState } from 'react'
import { Reducer } from './Reducer'

const INITIAL_STATE={
   user: JSON.parse(sessionStorage.getItem('user')) || null,
  isFetching: false,
  error: false
}

const context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
  useEffect(()=> {
    sessionStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])
   const [show, setShow] = useState(false)

  return (
    <>
      <context.Provider value ={{
        user : state.user,
        isFetching: state.isFetching,
        error: state.error,
        show, 
        setShow,
        dispatch
      }}>
        {children}  
      </context.Provider>
    </>
  )
}

export default context