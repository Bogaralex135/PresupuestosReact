/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useReducer, useEffect, useState } from 'react'

const AppContext = createContext()

const initialState = {
  gastos: [],
  presupuesto: 0,
  mostrarPresupuesto: true,
}

const actions = {
  ADD_GASTO: 'ADD_GASTO',
  REMOVE_GASTO: 'REMOVE_GASTO',
  MOSTRAR_PRESUPUESTO: 'MOSTRAR_PRESUPUESTO',
  SET_PREPUESTO: 'SET_PREPUESTO',
  REMOVE_PRESUPUESTO: 'REMOVE_PRESUPUESTO',
  RESTART: 'RESTART',
}

function appReducer(state, action) {
  switch (action.type) {
    case actions.ADD_GASTO:
      return {
        ...state,
        gastos: [...state.gastos, action.payload],
      }
    case actions.REMOVE_GASTO:
      return {
        ...state,
        gastos: state.gastos.filter(gasto => gasto.id !== action.payload.id),
      }
    case actions.MOSTRAR_PRESUPUESTO:
      return {
        ...state,
        mostrarPresupuesto: action.payload,
      }
    case actions.SET_PREPUESTO:
      return {
        ...state,
        presupuesto: action.payload,
      }
    case actions.REMOVE_PRESUPUESTO:
      return {
        ...state,
        presupuesto: 0,
      }
    case actions.RESTART:
      return initialState
    default:
      return state
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, getLSState())
  const [mostrarPresupuesto, setMostrarPresupuesto] = useState(true)

  function getLSState() {
    const state = localStorage.getItem('state')
    return state ? JSON.parse(state) : initialState
  }

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider
      value={{ state, dispatch, mostrarPresupuesto, setMostrarPresupuesto }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext, actions }
