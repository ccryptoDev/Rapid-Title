import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//routing module
import PrivateRoute from './components/routing/PrivateRoute';
//redux module
import { loadUser } from './store/actions/auth';
import store from './store/store';
import { LOGOUT } from './store/types';
import setAuthToken from './utils/setAuthToken';
//toastify settings
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from 'views/Home';
import Login from 'views/Auth/Login';
import Signup from 'views/Auth/Signup';
import EmailVerify from 'views/Auth/EmailVerify';
import { ProSidebarProvider } from 'react-pro-sidebar';
import NewTitle from './views/NewTitle/index';
import OtherInfo from 'views/OtherInfo';
import TitleDetail from 'components/common/TitleDetail';

function App() {
  useEffect( () => {
    const startFunc = async () => {
        // check for token in LS when app first runs
        if (localStorage.rapid_token) {
          // if there is a token set axios headers for all requests
          setAuthToken(localStorage.rapid_token);
        }
        // try to fetch a user, if no token or invalid token we
        // will get a 401 response from our API
        await loadUser();
        // log user out from all tabs if they log out in one tab
        window.addEventListener('storage', () => {
          if (!localStorage.rapid_token) store.dispatch({ type: LOGOUT });
        });
    }
    startFunc();
  }, []);

  return (
    <>
      <Router>
        <ToastContainer />
        <ProSidebarProvider>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/auth/login' element={<Login />}/>
            <Route path='/auth/signup' element={<Signup />} />
            <Route path="/verify" element={<EmailVerify />} />          
            <Route path="/home" element={<PrivateRoute component={Home} />} />
            <Route path='/createtitle' element={<PrivateRoute component={NewTitle} />} />
            <Route path='/createtitle/otherinfo' element={<PrivateRoute component={OtherInfo} />} />
            <Route path="/titleDetail/:id" element={<PrivateRoute component={TitleDetail} />} />
          </Routes>
        </ProSidebarProvider>
      </Router>
    </>
  );
}

export default App;
