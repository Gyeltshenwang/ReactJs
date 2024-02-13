import React,{useEffect} from 'react'
import CreateBook from './components/CreateBook'
import BookList from './components/BookList'
import useBookContext from './hook/hook-books-context'

function App() {
  
    // consume a context
    const {fetchBook} = useBookContext()
     useEffect(() =>{
        fetchBook();
      },[])

  return (
    <div>
    
        <div className='app' > 
        <h1>Reading List</h1>
            <BookList />
            <CreateBook />
        </div>
    </div>
  )
}

export default App