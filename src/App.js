import React from 'react';
import './App.scss';
import {Switch, Route} from "react-router-dom"
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import SignInAndSignUp from  "./pages/registration/forms.component"

function App() {
  return (
    <div className="">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
