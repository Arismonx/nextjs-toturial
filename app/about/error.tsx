'use client'
import React from 'react'

const error = ({error}:{error:Error}) => {
    console.log('test',error)
  return (
    <div>
      <h1>Error</h1>
    </div>
  )
}

export default error
