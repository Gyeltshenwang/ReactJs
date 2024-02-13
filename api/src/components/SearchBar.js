import React,{useState} from 'react'

const  SearchBar=({onSubmit})=> {
    const [terms, setTerms] = useState('')
   
    const handleClick =  (e) =>{
    e.preventDefault();
    onSubmit(terms)
   
    
    }

    const inputHandler = (e) =>{
     setTerms(e.target.value)
   
    }
  return (
    <div>
        <form onSubmit={handleClick}>
            <input value = {terms} onChange={inputHandler}/>
        </form>
    </div>
  )
}
export default SearchBar
