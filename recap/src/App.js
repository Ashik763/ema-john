import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';

function App() {
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])









  return (
    <div className="App">
      <MovieCounter> </MovieCounter>
      <Nayok name='bappa' movies='5'></Nayok>
      <Nayok name='jashim' movies='4'></Nayok>
      <Nayok name='salman'movies='3'></Nayok>
      <Nayok name='alomgir'movies='2'></Nayok>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MovieDisplay(props){
  return <h4>Movies i have acted:{props.movies}</h4>
}

function MovieCounter(){
  const [count,setCount]= useState(0);
  // console.log(first,second);
  // const count = 5;
  const handleClick = () => setCount(count+1);
  return (
    <div>
    <button onClick={handleClick}>add movie</button>
    <h5>number of movies:{count}</h5>
    <h5>number of movies:{count}</h5>
    <h5>number of movies:{count+10}</h5>
    <h5>number of movies:{count}</h5>
    <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}



function Nayok(props){
console.log(props);
  const design = {
    backgroundColor:'red',
    color:'white',
    border:'5px solid yellow'

  }
  return (
    <div style={design}>
      <h1>Ami {props.name} Nayok</h1>
      <h3>I have done {props.movies}movies</h3>
    </div>
  )
}


export default App;
