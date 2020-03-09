import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ViewComponent from './route.component/view.component';
import Footer from './component/footer/footer'
import ViewHeader from './component/header/view.header';
import Particles from 'react-particles-js';

const App = () => {
  const particlesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: '#0a0a0a',
          blur: 5
        }
      },
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
    }
  }
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFormAuthEvent = null;
  
    useEffect(() => {
    unsubscribeFormAuthEvent = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }, () => { console.log(currentUser); })
        });
      }
      setCurrentUser(userAuth)
    })
    return () => unsubscribeFormAuthEvent()
  }, []);

  return (
    <div className = "App">
      <ViewHeader currentUser = {currentUser} />
      <Particles className='particales' params={particlesOptions} />
      <Switch>
        <ViewComponent />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
