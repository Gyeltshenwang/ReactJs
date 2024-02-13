import React,{useState} from 'react'
import ImageApi from '../Api/ImageApi'

function SearchBar({onSearch}) {
    const [search,setSearch] = useState('')
  

    const onSubmitHandler = async (event) =>{
        event.preventDefault()
        const response_data = await ImageApi(search)
        onSearch(response_data)
    }
    const onChangeHandler = async (event) =>{
        setSearch(event.target.value)
       
        
    }
  return (  
    <div>
        <div>
            <form onSubmit={onSubmitHandler} >
                <input value = {search} onChange={onChangeHandler}/>
            </form>
           
        </div>
    </div>
  )
}

export default SearchBar