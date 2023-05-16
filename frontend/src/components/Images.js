import React, { useEffect, useMemo, useState } from 'react'
import ImageCard from './ImageCard'
import axios from 'axios'
import { FaSpinner } from 'react-icons/fa'
import {useSelector} from 'react-redux'
import { selectImages } from '../reducers/ImagesReducer'


const Images = () => {

    const [loading, setloading] = useState(false)
    const [images, setimages] = useState([])
    const imagesReduced = useSelector(selectImages)
    
    
    useMemo(()=>{
        const newimages = imagesReduced
        setimages(newimages)
    },[imagesReduced])

    console.log(imagesReduced)

  return (
    <div className='m-2'>
        {loading ? (
            <div className=' h-full flex flex-col items-center justify-center pt-8'>
                <FaSpinner className='loading-images'/>            
            </div>
        ) : (
            <>
                {images.length == 0 ? (
                    <div className='flex flex-col items-center justify-center'>
                        <p className=" text-xl">No images uploaded yet</p> 
                        <p className='text-xl'>Please upload images</p>
                    </div>
                ) : (
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-5 mx-auto">
                            <h2 className=' font-bold text-2xl font-sans pb-4'>Your Images</h2>
                            <div className="flex flex-wrap -m-4">
                                {images.map((image,index)=>(
                                    <ImageCard image={image} key={index}/>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </>
        ) }
        
    </div>
  )
}

export default Images