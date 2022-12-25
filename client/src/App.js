import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { UserDetails } from './components/UserDetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
      <Route path='/userDetails' element = {<UserDetails/>} />
      <Route path='/' element = {<Home/> } />
      </Routes>
    </div>
  );
}

export default App;
