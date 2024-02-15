import React from 'react'
import { changeSearchTerms } from '../store/slices/carsSlice'
import { useSelector,useDispatch } from 'react-redux'

export const CarSearch = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector(state => state.car.searchTerms)

  const handleSearchTerms = event =>{
    dispatch(changeSearchTerms(event.target.value))

  }

  return (
    <div className='list-header'>
      <h3 className='title is-3'>
        <div calssName = 'search field is-horizontal'>  
        <label calssName="label">
          <input 
           className='input'
           value={searchTerm}
           onChange={handleSearchTerms}
          
          />

        </label>

        </div>

      </h3>
    </div>
  )
}
