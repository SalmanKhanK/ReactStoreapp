import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Jacket} from '../component/Jacket'
  import {Tshirt} from '../component/T-shirt'
  import {Home} from '../component/Home'
  import {Shoes} from '../component/Shoes'
  import {NavbarItem} from '../component/Navbar'
  import {Details} from '../component/Details'
  import {Cart} from '../component/Cart'
  import {Footer} from '../component/Footer'
  import {Checkout} from '../component/Checkout';
export const Routerconfig = () => {
    return (
        <div>
    <Router>
        <NavbarItem/>
        <Switch>
        <Route exact path="/" component={Home}></Route>
          <Route exact path="/Jacket" component={Jacket}></Route>
          <Route exact path="/Tshirt" component={Tshirt}></Route>
          <Route exact path="/Shoes" component={Shoes}></Route>
          <Route path="/Details/:id" component={Details}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/Checkout" component={Checkout}></Route>
          <Route path="*" component={()=><h2>404 Not Found</h2>}/>
        </Switch>
        <Footer />
    </Router>
        </div>
       
    )
}
