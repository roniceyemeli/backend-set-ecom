import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddProduct from './admin/AddProduct';
import './App.css';
import BackDrop from './components/backdrop/BackDrop';
import NavBar from './components/navbar/NavBar';
import CartPage from './components/pages/CartPage';
import Home from './components/pages/Home';
import ProductPage from './components/pages/ProductPage';
import SignUp from './components/register/SignUp';
import SignIn from './components/login/SignIn';
import SideBar from './components/sidebar/SideBar';
import LogOut from './components/logout/LogOut';
import GetProducts from './admin/GetProducts';
// import { useSelector } from 'react-redux';


function App() {

//find a way to protect admin routes
  const [toogle, setToogle] = useState(false)

  return (
    <div>
      <Router>
      <NavBar click={()=>setToogle(true)}/>
      <SideBar  show={toogle} click={()=>setToogle(false)}/>
      <BackDrop  show={toogle} click={()=>setToogle(false)}/>     
        <Switch>

              <Route exact path ='/' component = {Home} />
              <Route exact path='/product/:id' component={ProductPage}/>
              <Route exact path ='/cart' component = {CartPage} />
              <Route exact path ='/register' component = {SignUp} />
              <Route exact path ='/login' component = {SignIn} />
              <Route exact path ='/logout' component = {LogOut} />
             
 
              <Route exact path='/addProducts' component={AddProduct}/>
              <Route exact path='/getProducts' component={GetProducts}/> 
           
        </Switch>      
    </Router>
    </div>
  );
}

export default App;
