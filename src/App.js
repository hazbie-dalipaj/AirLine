import React from 'react';
import './App.css';
import Header from './component/header/header';
import{Route, Switch} from 'react-router-dom';
import PageFlights from './component/flights/page.flights';
import Signin from './component/signin/signin';
import Register from './component/register/register';
import HomePage from './component/hompage/hom.page';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import DetailsUsers from './component/details.users/details.users';
import FlightsPage from './component/collection-flights/flights.page';
import CheckoutPage from './component/collection-flights/example'

class App extends React.Component {
	constructor(){
		super();
		this.state={
			currentUser:null
		};
  }
  unsubscribeFormAuth = null;

  //componentDidMount(){
    //this.unsubscribeFormAuth =  auth.onAuthStateChanged(async user => {
     // createUserProfileDocument(user);
      //this.setState({currentUser: user});
      //console.log(user);
    //})
  //}

  componentDidMount(){
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state);})
        });
      }
      this.setState({currentUser: userAuth});
    })
  }
  componentWillUnmount(){
		this.unsubscribeFormAuth();
	}
  render() {
    return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      
      <Switch>                  
        <Route exact path='/' component={HomePage} />  
        <Route path='/flights' component={PageFlights} />
        <Route path='/signin' component={Signin} />
        <Route path='/register' component={Register} />  
        <Route path='/users-data' component={DetailsUsers} />
        
        <Route path='/search-flights/:param1/:param2/:param3' render={({match}) =>{
          const pathParams = {};
            Object.values(match.params).forEach((param)=>{
              const splitedParam = param.split(':');
              pathParams[splitedParam[0]] = splitedParam[1];
            });

          return (
            <FlightsPage 
              from={pathParams.from}
              to={pathParams.to}
              cabine={pathParams.cabine}
            />
          );
        } } />
        <Route path='/test' component={CheckoutPage} />
      </Switch>
      
    </div>
  );
  }  
}

export default App;