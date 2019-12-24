import React, {Component} from 'react';
import './App.css';
import Header from './component/header/header';
import{Route, Switch} from 'react-router-dom';
import Flights from './component/flights/flights';
import Contact from './component/contact/contact';
import Signin from './component/signin/signin';
import Register from './component/register/register';
import HomePage from './component/hompage/hom.page';
import Checkin from './component/checkin/check.in';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <Switch>  
        <Route exact path='/' component={HomePage} />      
        <Route path='/flights' component={Flights} />
        <Route path='/contact' component={Contact} />
        <Route path='/signin' component={Signin} />
        <Route path='/register' component={Register} />
        <Route path='/checkin' component={Checkin} />
      </Switch>
      
    </div>
  );
  }  
}

export default App;
