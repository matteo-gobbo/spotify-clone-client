import { useEffect, useState } from "react"
import axios from "axios"

const useAuth = (code: string) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState(0)

  useEffect(() => {
    axios
      .post('http://localhost:5000/login', {
        code
      })
      .then((res) => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, '', '/')
      })
      .catch((e) => {
        window.location.replace("http://localhost:3000");
      })

  }, [code])

  useEffect(() => {
    if(!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      axios
        .post('http://localhost:5000/refresh', {
          refreshToken
        })
        .then((res) => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch((e) => {
          window.location.replace("http://localhost:3000");
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)

  }, [refreshToken, expiresIn])

  return accessToken
}

export default useAuth
