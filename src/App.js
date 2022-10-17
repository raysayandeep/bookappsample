//import logo from './logo.svg';
import React from 'react';
import Header from './components/header'
import Options from './components/options'
import Action from './components/action'
import './App.css';


class App extends React.Component{
  render(){
    const maintitle = 'My Book Application'
    const subtitle = 'Help me Choose a Book'
    const booklist = ['Book 1', 'Book 2', 'Book 3', 'Book 4']
    return (
      <div className='App'>
        <Header maintitle = {maintitle} subtitle = {subtitle}/>
        <Options booklist = {booklist} />
        <Action />
      </div>
    );
  }
}


export default App;
