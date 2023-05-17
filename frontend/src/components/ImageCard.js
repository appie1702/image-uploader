import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { toast } from 'tailwind-toast'
import { useHistory, } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increCount } from '../reducers/ImagesReducer'

const ImageCard = ({image}) => {

  const [loading, setloading] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();

  const updateCount = async ()=>{
    setloading(true)
    try{

      const config = {
        headers: {
            "Content-type": "application/json",
        },
      };

      const url = image.pic
      console.log(url)

      const data = await axios.post(
          "/api/images/count",
          {url},
          config
      );
      
      if(!data){
        setloading(false)
        toast().danger("","Something went wrong axios call").for(2000).show();
        return;
      }

      console.log(data.data.result)

      dispatch(increCount(data.data.result))

      setloading(false);

    }catch(error){
      setloading(false)
      toast().danger("",error).for(2000).show();
      return;
    }
  }

  
  return (
    <div className="p-4 md:w-1/4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img onClick={updateCount}  className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer" src={image.pic} alt="image"/>
          <div className='flex flex-row items-center justify-between'>
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{image.title}</h1>
              <p className="leading-relaxed mb-3">{image.desc}</p>
            </div>
            <div className='p-6 flex flex-col items-center'>
              <p className=' text-xl font-light pb-2'>View Count</p>
              <div className='flex flex-row space-x-2'>
                <p>{image.viewcount}</p>
                {loading && <FaSpinner className='loading-icon'/>}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default ImageCard