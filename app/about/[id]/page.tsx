import React from 'react'

const AboutDatailsPage = async({ params }: { params: { id: string } }) => {
    const { id } = await params;
    console.log(id);
    return (
    <div>
      AboutDatailsPage
      {id}
    </div>
  )
}

export default AboutDatailsPage

