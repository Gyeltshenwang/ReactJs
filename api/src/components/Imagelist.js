import React from 'react'
import ImageShow from './ImageShow'

 const Imagelist = ({images})=> {

  return (
    <div>
       
    <div>
     {images.map(image => <ImageShow key = {image.id}  src = {image.urls.small}/>)}
    </div>
       
    </div>
  )
}
export default Imagelist