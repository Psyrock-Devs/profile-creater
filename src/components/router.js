import React from "react";
import { Switch, Route } from "react-router-dom";
import Content  from "./content.js";

const Router =()=>(
    <Switch>
   
    <Route exact path="/"component = {Content}/>
                
       
    </Switch>
)
export default Router;