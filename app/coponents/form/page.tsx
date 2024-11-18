'use client'
import { createCamp } from '@/utils/actions'
import { useActionState } from 'react'

const Form = () => {
    const [message, formAction] = useActionState(createCamp,null)

    return (
        <div>
            {message && <p>{message}</p>}
            <h1>Form</h1>
            <form action={ formAction }>
                <input
                    className='border border-gray-300 rounded-md p-2'
                    placeholder="Camp Title"
                    defaultValue="Bongkok 1111"
                    name="title"
                />

                <input
                    placeholder="location"
                    name="location"
                    className='border border-gray-300 rounded-md p-2'
                    defaultValue="HOME"
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Form
