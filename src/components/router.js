import React from "react";
import { Switch, Route } from "react-router-dom";
import Content  from "./content.js";
import Home from "./home.js";
import Navbar  from "./navbar.js";


const Router =()=>(
    <Switch>
    <Route exact path="/" component = {Navbar}/>
 <Route exact path="/" component = {Home}/>
                <Route exact path="/content" component = {Content}/>
                
       
    </Switch>
)
export default Router;