import React,{useState} from 'react'
import Imagelist from './components/Imagelist';
import SearchBar from './components/SearchBar';
import SearchImages from './SearchImages';


 const App =  () => {

    const [images, setImages] = useState([])
    const handleSubmit = async (term) => {
     const results = await SearchImages(term)
     setImages(results)


    }
   
  return (
    <div>
        <div>
           <SearchBar onSubmit= { handleSubmit}/>
            <Imagelist images={images}  />
            
           
        </div>
    </div>
  )
}
export default App
