import React from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

const Random = () => {

  const {gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random GIFs</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt='loading' width="450"/>)
      }
      
      <button onClick={()=>{fetchData()}} className=' mb-[20px] w-10/12 bg-slate-700 text-lg py-2 rounded-lg text-white '>Generate</button>
    </div>
  )
}

export default Random
