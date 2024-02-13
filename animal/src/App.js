import React,{useState} from 'react'
import AnimalShow  from './AnimalShow'
const pickRandomAnimal = () =>{
    const randomAnimal = ['pig','cow', 'cat','dog','bird']
    return randomAnimal[Math.floor(Math.random()* randomAnimal.length)]
}

const App = () => {
    const [animals, setAnimals] = useState([])
 
function setRandonAnimal(){
setAnimals([...animals, pickRandomAnimal()])

}
const renderAnimalComponent = animals.map((animal, index)=>{
    return <AnimalShow type = {animal} key={index}/>
})

return (
    <div>
        <button onClick={setRandonAnimal}> Add Animal </button>
        <div> {renderAnimalComponent} </div>
       
    </div>
  )}
  

export default App