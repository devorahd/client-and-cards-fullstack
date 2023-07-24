import { NavLink } from 'react-router-dom';

export default function NavbarMenu({ isToken }) {
  return (
    <nav className="NavbarMenu">
      <NavLink to="/"> Home </NavLink>
      {/*       <NavLink to="/customerDetails"> Customer Details </NavLink> */}
      {/* <NavLink to="/cards"> Card Details </NavLink> */}
      {isToken && <NavLink to="/createCard"> Create Card </NavLink>}
      {isToken && <NavLink to="/editCard"> Edit Card </NavLink>}
    </nav>
  );
}
