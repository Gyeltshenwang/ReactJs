import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { changeCost,changeName, } from '../store/slices/formSlice'
import { addCar } from '../store/slices/carsSlice'

export const CarForm = () => {
    const dispatch = useDispatch();
  // useSelector , hold the entire redux state

  const {name,cost}= useSelector( (state) => {
  return{
    name:state.form.carName,
    cost:state.form.carCost
  }
  })

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(addCar({name,cost}))
}
    // interaction between redux store
    
    const handleNameChange = (event) =>{
        // called a dispatch function
            dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event) =>{
        const newcost = parseInt(event.target.value )|| 0
        dispatch(changeCost(newcost) )
    }

    // after submit  add the cate to the list 
   
  return (
    <div className='car-form panel'>
        <h4 className='subtitle is-3'> Add Car </h4>
        <form onSubmit={handleSubmit}>
            <div className='field-group'>
                <div className='field'>
                    <label className='label'>Name</label>
                    <input className='input is-expanded'  value ={name} onChange={handleNameChange}/>
                </div>

                <div className='field'>
                    <label className='label'>Cost</label>
                    <input className='input is-expanded'  value ={cost || ''} onChange={handleCostChange} type='number'/>
                </div>
            </div>
            <div className='field'> 
             <button className='button is-link'> submit</button>
            </div>
        </form>

    </div>
  )
}
