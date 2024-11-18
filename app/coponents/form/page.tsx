'use client'
import { createCamp } from '@/utils/actions'

const Form = () => {
    return (
        <div>
            <h1>Form</h1>
            <form action={ createCamp }>
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
