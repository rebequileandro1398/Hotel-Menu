import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/session*' element={<Navbar/>}/>
      </Routes>
      <Routes>
        <Route path='/session/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
