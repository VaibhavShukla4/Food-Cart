
import './App.css';
import {Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';






function App() {
  return (
    <div className="App vh-100">
      <Routes>
    
       <Route exact path='/' element={<Login/>}/>
    
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Cards' element={<Cards/> }/>
        <Route exact path='/cart/:id' element={<CardsDetails/> }/>
       <Route exact path='/Checkout' element={<Checkout/>}/>

      </Routes> 
    </div>
  ); 
}

export default App;
