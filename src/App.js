import React, { Component} from 'react';
import './App.css';
import UserForm from './components/userForm';

class App extends Component {
render(){
  return (
    <div className="App">
       <div className="col-lg-8 mx-auto text-center mt-5">
          <h1><b>Let's generate your Profile!</b></h1>
          <p className="lead">Please kindly provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>  
        <UserForm/>
    </div>
  );
}
}
export default App;
