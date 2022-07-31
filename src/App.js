
import './App.css';
import {Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <div className="App vh-100">
      <Routes>
       <Route exact path='/unauthorized' element={<Unauthorized/>}/>
        <Route exact path='/' element={<Home/>}/>
       <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/menu' element={<Menu/> }/>
       <Route exact path='/checkout' element={<Checkout/>}/>
      <Route exact path='/*' element={<NotFound/> }/>
      </Routes> 
    </div>
  ); 
}

export default App;
