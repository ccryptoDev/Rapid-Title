import {useEffect} from 'react';
import './index.view.css';
import AuthBG from 'components/common/AuthBg'
import LoginCard from 'components/common/LoginCard'
import setAuthToken from 'utils/setAuthToken';
import store from 'store/store';
import { LOGOUT } from 'store/types';
import { loadUser } from 'store/actions/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
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
        // navigate('/home')
        // log user out from all tabs if they log out in one tab
        window.addEventListener('storage', () => {
          if (!localStorage.rapid_token) store.dispatch({ type: LOGOUT });
        });
    }
    startFunc();
  }, []);
  return (
    <>
      <div className='bg-white h-screen w-screen relative flex justify-center items-center'>
        <AuthBG />
        <LoginCard />
      </div>
    </>
  );
}

export default Login;
