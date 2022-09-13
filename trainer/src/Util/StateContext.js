import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [loaded, setLoaded] = useState(false)

  const value = useMemo(() => ({ token, setToken, loaded, setLoaded }), [token, loaded])
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
