import {createSlice,nanoid} from '@reduxjs/toolkit'

const carSlice = createSlice({
    name:'cars',
    initialState:{
        cars: [],
        searchTerms:''
    },

    reducers:{
      addCar(state, action) {

        const car_data = {
            name:action.payload.name,
            id:nanoid(),
            cost:action.payload.cost,
        }
     state.cars.push(car_data)

      },
      removeCar(state,action){
       const updated = state.cars.filter(car => car.id !== action.payload)
       state.cars = updated
      },
      changeSearchTerms(state,action){
        state.searchTerms = action.payload
      }
    }
})

export const {addCar,removeCar,changeSearchTerms} = carSlice.actions
export const carReducer = carSlice.reducer