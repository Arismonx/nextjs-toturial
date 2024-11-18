import React from 'react'
import { fetchCamps } from '@/utils/actions'

const campList = async() => {
    const camps = await fetchCamps()
    console.log(camps);
  return (
    <div>
      <h1>Camp List</h1>
      {
        camps.map((item,index)=>{
            return <li key={index}>{item.title}</li>
        })
      }
    </div>
  )
}

export default campList
