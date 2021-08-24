import React from 'react'
import useAuth from './hooks/useAuth'

const Dashboard: React.FC<{ code: string }> = ({ code }) => {

  const accessToken = useAuth(code)

  return (
    <div>
      Dashboard
      <br />
      {code}
    </div>
  )
}

export default Dashboard
