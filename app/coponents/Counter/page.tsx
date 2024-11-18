'use client'
import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='text-2xl'>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
 