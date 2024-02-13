import React from 'react'
import  bird from './svg/bird.svg'
import  cat from './svg/cat.svg'
import  cow from './svg/cow.svg'
import  dog from './svg/dog.svg'
import  gator from './svg/gator.svg'
import  heart from './svg/heart.svg'
import  horse from './svg/horse.svg'

import {useState} from 'react'
const svg = {
    bird,cat,cow,dog,gator,horse
}

// console.log(svg[bird])

 const AnimalShow = ({type}) => {
    const [count, setCount] = useState(0)
   const clickHandler=()=>{
    setCount(count + 1)
   }
  return (
    <div onClick={clickHandler}>
        <img src = {svg[type]} alt='animals'/>
        <img src={heart} alt='heart' style={{width: 10 + 10 *count+"px"}}/>
    
    </div>

  )
}
export default AnimalShow