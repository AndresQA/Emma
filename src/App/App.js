import React, { useEffect, useState } from 'react';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import { HashRouter as Router, Route, link, Redirect, useHistory, BrowserRouter, Switch } from 'react-router-dom';
import Index from '../pages/Main/Main';
import firebase from '../constants/Firebase/Firebase';
import 'firebase/auth';
import './App.scss';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import AppContext, { AppContextProvider } from "./AppContext";
import RLink from '../constants/Routes/RLink';
import User from '../constants/Firebase/User';
import LoginContext, { LoginContextProvider } from './LoginContext';



const App = () => {

  return <AppContextProvider>
    <LoginContextProvider>
      <AppLoad />
    </LoginContextProvider>
  </AppContextProvider>
}

export default App;


const AppLoad = () => {
  return <div className="App">
    <BrowserRouter>
      <Header />
      <Body>
        <Switch>
          <RouterConfig />
        </Switch>
      </Body>
    </BrowserRouter>
  </div>
}


const RouterConfig = () => {


  const history = useHistory();

  const { useLogin } = AppContext.Consumer();
  const [isLoging, setIsLogin] = useLogin();
  const { useUser, useEmail, usePassword } = LoginContext.Consumer();

  const [user, setUser] = useUser();
  const [email, setEmail] = useEmail();
  const [password, setPassword] = usePassword();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');


  


  useEffect(() => {
   User.getUserChangeLocal(user => {
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


    User.login(email, password, (isLogin) => {
      if (isLogin) {
        history.push("/inicio");
      } else {

      }
    }, (err) => {
      switch (err) {
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

    User.register(email, password, {
      nombre: user
    }, () => {

    }, (err) => {
      switch (err) {
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

  const pathName = window.location.pathname;

  const { usePathname } = AppContext.Consumer();
  const [pageName, setPathName] = usePathname();

  return <>
    {
      isLoging !== undefined && isLoging === false ? <Redirect to="/" /> : (
        isLoging !== undefined &&
        (isLoging === true &&
          (pathName.includes("registro") ||
            pathName.includes("iniciarSesion")


            || pathName.length < 2))) ? (() => {
              setPathName(RLink.INICIO)
              return <Redirect to={RLink.INICIO} />
            })() : <></>
    }
    {isLoging !== undefined ? <>
      <Route exact path="/" component={Home} />
      <Route path="/registro" render={() => <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignUp={handleSignUp} />} />
      <Route path="/iniciarSesion" render={() => <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} isLoging={isLoging} setIsLogin={setIsLogin} />} />
      <Route path="/inicio" component={Index} />

    </> : <></>}

  </>
}