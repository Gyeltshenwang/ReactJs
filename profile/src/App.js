import React from 'react'
import Profile from './Profile'
import 'bulma/css/bulma.css'
import './App.css'
export default function App() {
    const profile_details = [
        {"name":"alexa",
        "src":'https://media.istockphoto.com/id/688976638/photo/close-up-portrait-of-beautiful-woman-with-creative-gold-make-up.jpg?s=612x612&w=0&k=20&c=F_FFbek8Ur5V4Kg4ZbDdxa4K6X2dt7nUiY2U-tTAaO0='
        ,"handler":"alexa@twitter.com"},
        {
            "name":"cortana",
            "src":'https://media.istockphoto.com/id/688976514/photo/close-up-portrait-of-beautiful-woman-with-creative-gold-make-up.jpg?s=612x612&w=is&k=20&c=6nofkic_RmuuMCPyiIO1Ada7wxpPkcZ-soz0BOi0B8E='
            ,"handler":"cortana@twitter.com"
        },
        {
         "name":"seri",
         "src":'https://images.unsplash.com/photo-1706523964433-84c91f9086ca?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'
         ,"handler":"seri@twitter.com"
        }
]
  return (
    <div className='contain'>
        <div>
            <j2> Hello this is a profile page</j2>
        </div>
     {profile_details.map((profile,index) => <Profile key = {index} title = {profile.name} src = {profile.src} handler = {profile.handler}/>)}
    </div>
  )
}
