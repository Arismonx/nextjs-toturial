//rafce
//rfce
import React from 'react'
const page = async () => {
  await new Promise((resolve) => setInterval(resolve,1000))
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default page