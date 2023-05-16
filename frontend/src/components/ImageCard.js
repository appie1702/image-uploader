import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image.pic} alt="image"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{image.title}</h1>
            <p className="leading-relaxed mb-3">{image.desc}</p>
          </div>
        </div>
      </div>
  )
}
export default ImageCard