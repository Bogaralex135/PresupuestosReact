import { AppContext } from '../Providers/AppProvider'
import { useContext } from 'react'

export function useAppContext() {
  return useContext(AppContext)
}

export default useAppContext
