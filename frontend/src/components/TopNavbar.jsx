import LoginLogout from './LoginLogout';
import NavbarMenu from './NavbarMenu';

export default function TopNavbar({ isToken, updateLoginStatus }) {
  return (
    <nav className="TopNavbar">
      <NavbarMenu isToken={isToken} />
      <LoginLogout isToken={isToken} updateLoginStatus={updateLoginStatus} />
    </nav>
  );
}
