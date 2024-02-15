import { configureStore } from "@reduxjs/toolkit"
import { carReducer,changeSearchTerms,addCar,removeCar } from "./slices/carsSlice"
import { formReducer,changeCost,changeName } from "./slices/formSlice"


 export const store = configureStore({
    reducer: {
        car: carReducer,
        form: formReducer,
    }
})

