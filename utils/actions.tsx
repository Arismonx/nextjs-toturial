'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createCamp = async(prevState,formData) => {
    // const title = formData.get('title')
    // const location = formData.get('location')
    const rawData = Object.fromEntries(formData)
    console.log(rawData);
    //prisma.camp.create()
    // revalidatePath('/camp')
    // redirect('/')
    return 'create camp success'
}