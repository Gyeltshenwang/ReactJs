import React from 'react'
import { useSelector } from 'react-redux'


export const CarValue = () => {

  const car_cost = useSelector(({car:{cars,searchTerms}}) => cars.filter(car => car.name.toLowerCase().includes(searchTerms.toLowerCase())))

  const sum = car_cost.reduce((accumulator, cruurent_val) => accumulator+cruurent_val.cost , 0)


  return (

      <div className='car-value'>
        <p>
       Total Cost-${sum}
        </p>

    </div>
  )
}
