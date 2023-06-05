import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import Context from '../utils/context';

const Navbar = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const { state, dispatch } = useContext(Context);

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('userID');
    dispatch({ type: 'SET_VIEW', param: 'auth' });
  };

  const handleNavigate = (route) => {
    dispatch({ type: 'SET_VIEW', param: route });
  };

  return (
    <div className="navbar">
      <button onClick={() => handleNavigate('/')}>Home</button>

      {!cookies.access_token ? (
        <button onClick={() => handleNavigate('/auth')}>Login/Register</button>
      ) : (
        <button className="bg-gray-600 text-white px-4 py-2 rounded-md" onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Navbar;
