import { createContext, useMemo, useState } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [userId, setUserId] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const value = useMemo(
    () => ({ token, setToken, loaded, setLoaded, userId, setUserId }),
    [token, loaded, userId]
  )
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}
export { StateProvider, StateContext }
