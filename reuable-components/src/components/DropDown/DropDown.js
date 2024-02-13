import React,{useState} from 'react'


function DropDown({options}) {
    const [isOpen, setIsOpen]= useState(false);
    const [select, setSelect] = useState('')
    const handleClick = () =>{
        // open and close the dropdown 
        setIsOpen(!isOpen);
    }
    const handleSelectOptions = (options) =>{
        // close dropdown
        setIsOpen(false)
        setSelect(options.label)
    }
    const renderOptions = options.map(option => (
    
    <div onClick={ () => handleSelectOptions(option)} key={option.value}> {option.label}</div>
    
    )
    )
  return (

    <div>

     <div onClick = {handleClick}>DropDown... {select} </div>
    {  isOpen && <div> {renderOptions} </div>}
    </div>
   
  )
}

export default DropDown 