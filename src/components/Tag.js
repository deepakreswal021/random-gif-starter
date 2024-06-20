import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

const Tag = () => {

  const [tag,setTag]=useState('car');
  const {gif,loading,fetchData} = useGif(tag);
  
  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} GIFs</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt='loading' width="450"/>)
      }
      
      <input 
        type='text'
        className='mb-[3px] w-10/12 text-lg py-2 rounded-lg  text-center '
        name='tag'
        onChange={(event)=>{
            setTag(event.target.value)
        }}
        value={tag}
      />

      <button onClick={()=>{fetchData()}} className=' mb-[20px] w-10/12 bg-slate-700 text-lg py-2 rounded-lg text-white '>Generate</button>
    </div>
  )
}

export default Tag
