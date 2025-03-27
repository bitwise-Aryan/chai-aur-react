import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'


//yhi pe fn bnakr app ke jgh bhej de koi dikt nhi kr skte h


function MyApp(){//note fn name first letter must be capital
  return(
    <div>
      <h1>custom app !</h1>
    </div>
  )
}
/*
//agr MyApp ko eventually isi mein convert hona h to ye bhi chlna chahiye
//mgr nhi ye obj h//wo fn h
//we can reduce the step by passing createElement but point to note is that reactElement needs its custom render as used in customReact folder 
//ab jo orignal render h wo ek react ka mthd h jo ek particular syntax h
const reactElement={//react kaise dekhta h html ko?
  type:'a',//ye tag ke properties ke bare mein bat kr rha,ki jaise <div> hota ya p tag ya a tag,yha a tag
  props:{//obj h
      href:"https://google.com",
      target:'_blank'
  },
  children:'Click me to visit google'

}
*/

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
//if we put antherElement after.render ye render hojarha h


//jo prblm upr createElement mein aarha tha usko hm ab react ke hi mdd se bnaenege
const anotherUser='hii'
const reactElement=React.createElement(
    'a',//name of tag
    {href:'https://google.com',target:'_blank'},//attributes ek ek krke comma de dekr//h to dijye wrna empty chor dijye
    'click me to visit google',//direct text//children
    anotherUser//variable injected //jsx ke mdd se bhi hoskta h
)

//App() aise bhi fn ko bhej skte mgr//bad practiceee
createRoot(document.getElementById('root')).render(
  
  <App/> 
  
)
