import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react'

   const App= ()=>{
     const title= "Hello"
     const stories = [
      {
        title: "React",
        url: "https://reactjs.org",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 1,
      },
      {
        title: "Redux",
        url: "https://redux.js.org",
        author: "Dan Abramov",
        num_comments: 2,
        points: 5,
        objectID: 2,
      },
     ]
     console.log("App renders")
     const handleSearch=(event) =>{
      console.log(event.target.value)
     }
     return(
    <div>
      <h1>{title}</h1>
      <h1>My Hacker Stories</h1>
       <Search onSearch={handleSearch}/>
       <hr/> 
       <Listofwords list={stories}/>
    
     </div>
   )};    
   


   const Search=(props)=>{ 
     const [SearchTerm, setSearchTerm]= React.useState('');
     /*const handleChange = (event)=> {
      setSearchTerm(event.target.value);
     };*/
     console.log("Search renders")
    return(
      <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={props.onSearch}></input>
        <p> The typed term is : {SearchTerm}</p>
      </div>
    
   )};
   const Listofwords=(props)=> 
    
      <ul>
   {
    
    props.list.map((x)=>
    
           (
           <li key={x.objectID}>
            <span> <a href={x.url}>{x.title}</a></span>
            <span>{x.author}</span>
            <span>{x.num_comments}</span>
            <span>{x.points}</span>
            
             </li>))
        }</ul>
           
  

export default App