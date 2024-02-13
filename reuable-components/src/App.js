import Accordion from "./components/Accordion/Accordion";
import Button from "./components/Button/Button";
import {GoAlert, GoArrowBoth, GoBell,GoDatabase} from 'react-icons/go'
import AccordionPage from "./pages/AccordionPage";
import DropDown from "./components/DropDown/DropDown";



function App() {

  
const  accordion = [
  { 
      "title":"click me",
      "content":"this is the accordion "
},
{ 
  "title":"click me",
  "content":"this is the accordion "
},
{ 
  "title":"click me",
  "content":"this is the accordion "
},
{ 
  "title":"click me",
  "content":"this is the accordion "
},
{ 
  "title":"click me",
  "content":"this is the accordion "
},

]

const options = [
  {
  label:'Red', value:'red'
},
{
  label:'Green', value:'green'
},
{
  label:'Blue', value:'blue'
},
{
  label:'Orange', value:'orange'
}


]
  const handleClick= () =>{
    console.log('hello world')
  }
  return (
    <div className="flex">
      <div>
      <div>
         <Button primary outline  onClick = {handleClick}> <GoBell /> primary</Button>
      </div>

      <div>
         <Button success > <GoDatabase/> Success</Button>
      </div>

      <div>
           <Button danger  outline > <GoAlert/> Danger</Button>
      </div>

      <div>
           <Button warning  rounded outline > <GoArrowBoth/> Warning </Button>
      </div>
      </div>
      
      
      <Accordion items ={accordion}/>
      {/* <AccordionPage items = {accordion} /> */}
      <DropDown options ={options}/>
      
     
    </div>
  );
}

export default App;
