import React from 'react'
import Counter from '../coponents/Counter/page'
import Image from 'next/image'

const url = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";


const info = () => {
  console.log('info page')
  return (
    <div>
      <Counter />
      <hr/>
      <Image 
        src={url}
        alt="image"
        width={500}
        height={500}
        priority
      />
    </div>
  )
}

export default info

