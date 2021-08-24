import { useEffect, useState } from "react"
import axios from "axios"

const useAuth = (code: string) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios.post('http://localhost:5000/login', {
      code
    }).then((res) => {
      console.log(res.data)
    })

  }, [code])
}

export default useAuth
