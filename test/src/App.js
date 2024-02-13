import React from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';


function App() {
    // const [images,setImages] = useState([])
    const onSearchHandler = (search_list) =>{
        const data = search_list
    }
  return (
    <div>
        <div>
            <SearchBar onSearch = {onSearchHandler} />
        </div>
        <div>
            <ImageList />
        </div>
    </div>
  )
}

export default App