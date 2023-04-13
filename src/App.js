import React from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import AppProvider from './components/AppProvider'
import Products from './templates/products'
import Product from './templates/product'
import Cart from './templates/cart'
import Checkout from './templates/checkout'
import About from './templates/about'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
// eslint-disable-next-line no-extend-native
 Number.prototype.toCurrency = function(){
  return `$${(this / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function App() {

  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route  path="/login" component={LoginPage}/>
          <Route exact path="/">
            <Products/>
          </Route>
          <Route 
            path="/products/:id"
            render={(props) => <Product {...props} {...props.match.params}/>}
          />
          <Route path="/cart" component={Cart}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/about" component={About}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/forgot-password" component={ForgetPasswordPage}/>
          <Route path="*">
            <div className="tw-container text-center py-20">
              <h2 className="font-bold">404: Page Not Found</h2>
              <Link to="/" className="mt-5 btn w-max mx-auto">Return To Home</Link>
            </div>
          </Route>
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;

