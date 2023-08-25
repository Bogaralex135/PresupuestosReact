/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useReducer } from 'react'

const AppContext = createContext()

const initialState = {
  gastos: [],
  presupuesto: 0,
  darkMode: false,
}

const actions = {
  ADD_GASTO: 'ADD_GASTO',
  REMOVE_GASTO: 'REMOVE_GASTO',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
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
    case actions.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
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
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext, actions }
