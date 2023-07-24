import { NavLink } from 'react-router-dom';

export default function LoginLogout({ isToken, updateLoginStatus }) {
  function logout() {
    localStorage.removeItem('token');
    updateLoginStatus();
  }

  return (
    <nav className="LoginLogout">
      {!isToken && <NavLink to="/login"> Log in </NavLink>}
      &nbsp; &nbsp;
      {!isToken && <NavLink to="/register"> Register </NavLink>}
      {isToken && (
        <NavLink to="/" onClick={logout}>
          Log out
        </NavLink>
      )}
      &nbsp; &nbsp;
      {isToken && (
        <NavLink to="/editCustomerDetails">
          <img src="/icons8-person-30.png" alt="loggedinLogo" />
        </NavLink>
      )}
    </nav>
  );
}
