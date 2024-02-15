import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store/slices/carsSlice';


export const CardList = () => {
  const dispatch = useDispatch();
  
    const cars = useSelector(({car:{cars,searchTerms}})=>{
    
        return cars.filter(data => data.name.toLowerCase().includes(searchTerms.toLowerCase()))
      
    })
    const deleteHandler = (car) => {
      dispatch(removeCar(car.id))

    }
  return (
    <div className='car-list'> {cars.map(data => <div className='panel' key={data.id}> <p> {data.name} -${data.cost} </p> 
    <button className="button is-danger" onClick={()=>deleteHandler(data)}> delete </button> 
    </div>)} 
    
    </div>
  )
}
