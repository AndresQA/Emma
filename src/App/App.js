import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Resume from '../Resume/Resume';
import Login from '../Login/Login';
import { HashRouter as Router, Route, link, Redirect, useHistory, BrowserRouter, Switch } from 'react-router-dom';
import Test from '../Test/Test';
import Index from '../Main/Main';
import firebase from '../Firebase/Firebase';
import 'firebase/auth';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <RouterConfig />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;


const RouterConfig = () => {


  const history = useHistory();

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');


  const [isLoging, setIsLogin] = useState(undefined);


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("usuario logueado");
        setIsLogin(true)
      } else {
        setIsLogin(false)
        console.log("usuario no registrado");
      }
    });

  }, [])

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearError();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password).then((user) => {

        history.push("/inicio");

      })
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
      } else {
        setUser("");
      }
    })
  };

  useEffect(() => {
    authListener();
  }, [])

  return <>
    {
      isLoging !== undefined && isLoging === false ? <Redirect to="/" /> : isLoging !== undefined && isLoging === true ? <Redirect to={"/inicio"} /> : <></>
    }
    {isLoging !== undefined ? <>
      <Route exact path="/" component={Home} />
      <Route path="/registro" render={() => <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignUp={handleSignUp} />} />
      <Route path="/resumen" component={Resume} />
      <Route path="/iniciarSesion" render={() => <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} isLoging={isLoging} setIsLogin={setIsLogin}/>} />
      <Route path="/test" component={Test} />
      <Route path="/inicio" component={Index} />

    </> : <></>}

  </>
}