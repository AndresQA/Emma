import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Resume from '../Resume/Resume';
import Login from '../Login/Login';
import { HashRouter as Router, Route, link } from 'react-router-dom';
import Test from '../Test/Test';
import Index from '../Index/Index';
import firebase from '../Firebase/Firebase';
import 'firebase/auth';


function App() {


  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }

  const clearError= () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearError();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassword(err.message);
            break;
        }
      })
  }

  const handleSignUp = () => {
    clearError();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassword(err.message);
            break;
        }
      })
  };

  const handleLogOut = () => {
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      }else {
        setUser("");
      }
    })
  };

  useEffect(() => {
    authListener();
  }, [])


  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/registro" render={() => <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignUp={handleSignUp}/>} />
        <Route path="/resumen" component={Resume} />
        <Route path="/iniciarSesion" component={Login} />
        <Route path="/test" component={Test} />
        <Route path="/inicio" component={Index} />

      </Router>


    </div>
  );
}

export default App;
