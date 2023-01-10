
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      
      <Route exact path ='/' element = {< Home/>}/>
      <Route path='/' element = {<SearchBar/>}/>
      </Routes>
     
       
    </div>
   
  );
}

export default App;
/**
 export function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/characters/:id"  element={<CardDetail/>}/>
      <Route
      path="*"
      element={<SoftNotFound/>}
    />
    </Routes>
    </div>
  );
}
 */