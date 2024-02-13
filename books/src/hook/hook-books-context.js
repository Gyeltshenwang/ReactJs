import {useContext} from 'react'
import BookContext from '../context/Crud_Context'

const useBookContext = () =>{
    return  useContext(BookContext)
}

export default useBookContext;