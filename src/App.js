
import './App.css';
import {Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';

function App() {
  return (
    <div className="App vh-100">
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/menu' element={<Menu/> }/>
       <Route path='/checkout' element={<Checkout/>}/>
      </Routes> 
    </div>
  ); 
}

export default App;
{/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Menu/> }/>
      </Routes> */}