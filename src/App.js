
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/navbar';

function App() {
  return (
  <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/cart'element={<Cart/>}></Route>
 </Routes>
 </BrowserRouter>
  </>
  );
}
   
export default App;
