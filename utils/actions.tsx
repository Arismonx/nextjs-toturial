'use server'

export const createCamp = async(formData: FormData) => {
    // const title = formData.get('title')
    // const location = formData.get('location')
    const rawData = Object.fromEntries(formData)
    console.log(rawData);
    // return 'create camp success'
}