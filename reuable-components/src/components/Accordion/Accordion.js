import React, { useState } from 'react'
import {GoChevronDown, GoChevronRight} from 'react-icons/go'


const Accordion = ({items}) => {
    const[expendedIndex, setExpendedIndex] = useState(-1)
  return (
    <div>
        {items.map((data,index) => {

          //sdfdsf/
    //   if (index === expendedIndex) {
    //     console.log('expended')
    //   }
    //   else{
    //     console.log('collapsed')
    //   }
    
    const isExpended = index === expendedIndex
    const icon  = <span>{isExpended ? <GoChevronDown/>:<GoChevronRight/>}</span>
   

      return(
        <>  
            <div  className='flex p-1 border' onClick={()=> 
                {expendedIndex === index ? setExpendedIndex(-1) :setExpendedIndex(index)} 
                }>
                {icon}
                {data.title} 
                </div>
            {isExpended && <div className='flex p-4 border'>{data.content}</div>}
        </>
)
           

        }
           
       
         

           
        )}
    </div>
  )
}

export default Accordion