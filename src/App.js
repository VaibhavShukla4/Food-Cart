
import './App.css';
import {Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
// import Details from './pages/Details';
import AddToCart from './components/AddToCard';
import Cards from './components/Cards';
// import Cards from './components/Cards';



function App() {
  return (
    <div className="App vh-100">
      <Routes>
       
       <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Cards' element={<Cards/> }/>
        <Route exact path='/AddToCart' element={<AddToCart/> }/>
       <Route exact path='/AddToCart/Checkout' element={<Checkout/>}/>
      
      </Routes> 
    </div>
  ); 
}

export default App;
