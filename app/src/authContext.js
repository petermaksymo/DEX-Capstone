import React, { createContext, useEffect, useState } from "react"

const API_BASE_URL = "http://localhost:5000"

export const AuthContext = createContext()

const parseJwt = (token) => {
  if (!token) return
  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace("-", "+").replace("_", "/")
  return JSON.parse(window.atob(base64))
}

const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  const login = (username) => {
    const formdata = new FormData()
    formdata.append("username", username)

    return fetch(`${API_BASE_URL}/login`, { method: "POST", body: formdata })
      .then((response) => response.json())
      .then((token) => {
        if (token.error) {
          setIsAuthLoading(false)
          throw token.message
        }

        if (token.access_token) {
          localStorage.setItem("LS_SWAP_JWT", token.access_token)
          setIsAuthed(true)
        }
        setIsAuthLoading(false)
      })
  }

  const checkTokenExpired = () => {
    const token = localStorage.getItem("LS_SWAP_JWT")

    if (!token) return false

    const decodedToken = parseJwt(token)
    return decodedToken.exp < new Date().getTime() / 1000
  }

  const authedFetch = (url, options = {}, try_again = true) => {
    const makeCall = () => {
      const token = localStorage.getItem("LS_SWAP_JWT")

      return fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers: new Headers({
          ...options.headers,
          Authorization: `Bearer ${token}`,
        }),
      }).then((res) => res.json())
    }

    if (checkTokenExpired() && try_again) {
      return reAuthenticate().then(makeCall)
    }

    return makeCall()
  }

  const reAuthenticate = () => {
    const token = localStorage.getItem("LS_SWAP_JWT")
    if (!token) {
      setIsAuthLoading(false)
      return
    }

    // Check if jwt is still valid first...
    if (!checkTokenExpired()) {
      setIsAuthed(true)
      setIsAuthLoading(false)
      return
    }

    return authedFetch(`${API_BASE_URL}/refresh`, { method: "POST" }, false)
      .then((res) => res.json())
      .then((token) => {
        if (token.access_token)
          localStorage.setItem("LS_SWAP_JWT", token.access_token)
        setIsAuthed(true)
        setIsAuthLoading(false)
      })
      .catch((err) => {
        logout()
        setIsAuthLoading(false)
        window.location = "/"
      })
  }

  const logout = () => {
    localStorage.removeItem("LS_SWAP_JWT")

    setIsAuthed(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => reAuthenticate(), [])

  const defaultContext = {
    login,
    logout,
    authedFetch,
    isAuthed,
    isAuthLoading,
  }

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
