import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()
  return (
    <div className='bg-blue-400 text-white text-3xl px-2 py-2'>
      User: {userid}
    </div>
  )
}

export default User
