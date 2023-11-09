import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Products from './Products';
import SingleView from './SingleView';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='' element={<Login></Login>}></Route>
      <Route path='products' element={<Products></Products>}></Route>
      <Route path='singleview/id' element={<SingleView></SingleView>}></Route>
      <Route path='cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
