import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/NavBar/Navbar';
import { Order } from './components/Order/Order';
import { Details } from './components/Cards/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/session/*' element={<Navbar/>}/>
      </Routes>
      <div className='App'>
        <Routes>
          <Route path='/session/home' element={<Home/>}/>
          <Route path='/session/order' element={<Order/>}/>
          <Route path='/session/details' element={<Details/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
