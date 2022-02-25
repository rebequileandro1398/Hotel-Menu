import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/NavBar/Navbar';
import { Order } from './components/Order/Order';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
