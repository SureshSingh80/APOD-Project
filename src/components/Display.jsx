import React, { useState } from 'react'
import '../index.css'
const Display = (props) => {

    const {data,loading}=props;
    const [show,setShow]=useState(false);
   
    const handleInfo=()=>{
      console.log("clicked in handleclose");
       setShow((prev)=>!prev);
       
    }


  if(loading){
    return <div>
          <p>Loading...</p>
          <span className="material-symbols-outlined ml-16 absolute top-1">hourglass_bottom</span>
      </div>
  }
  return (
    <div className=''   >
        <div className='shadow-black'><img src={data.url} className='w-[100%] h-[100vh]'/></div>
        
        <div className='relative -mt-20 ml-4 flex justify-between'>

          <p className=' p-2  bg-gray-600 rounded-full'  >
            <b className='text-white text-xl' >{data.title}</b>
         </p>

          <button onClick={handleInfo} className='text-white mr-4  bg-gray-600 rounded-full p-0' style={{width:"30px", height:"30px", borderRadius:"50%",backgroundColor:"#4b5563"}}>
            <span class="material-symbols-outlined">info</span>
          </button>

        </div>
        
        {/* Info box */}
        {
        show?
        <div className='w-[30%] h-[100%] bg-black text-white absolute top-0 right-0 infoContainer'>

            <div className='text-center m-4 font-light text-lg'>
                <p>{data.title}</p>
                <button onClick={handleInfo} className='absolute right-0 top-2'><span class="material-symbols-outlined">close</span></button>
            </div>

            <div className='m-4 text-center font-light text-lg'>
               <p>{data.date}</p>
            </div>

            <div className='m-4 '>
                <p>{data.explanation}</p>
            </div>

            <div >
               
            </div>
            
       </div>:""
        }
    </div>
  )
}

export default Display