import React, {useState,useEffect} from 'react'

export default function App(){
  const[Book,setBook]=useState(0);
  //when render method called then after that useeffect calls automatically
  //After using useeffect we see the increment and alert both 
useEffect(()=>{
  alert('Book increased');
})

  return ( 
  
    <button onClick={(()=>{
      setBook(Book+1);
    })}
    //when we use a alert function  as a inline function ,
    // when click on  button then there is no increase only
    // a alert message comes on clicking the button 
    //basically we see the upper function is not working it directly comes to 
    //the alert function 
    //we want the increment and alert also hence we use the useEffect as it 
    //run after the render function works then useEffect runs 
    // ()=> {
    //   alert('Book increased');
    // } )
  
    >MathsBook-{Book}</button>
   
  );
}

