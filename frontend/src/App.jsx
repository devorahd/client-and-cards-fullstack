import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
/* import CustomerDetails from './components/customer/CustomerDetails'; */
import EditCustomerDetails from './components/customer/EditCustomerDetails';
import Cards from './components/cards/Cards';
import EditCard from './components/cards/EditCard';
import CreateCard from './components/cards/CreateCard';
import Register from './components/customer/Register';
import Login from './components/customer/Login';
import Error404 from './components/Error404';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  let [isToken, setIsToken] = useState(!!localStorage.getItem('token'));

  function updateLoginStatus() {
    setIsToken(!!localStorage.getItem('token'));
  }

  useEffect(() => {
    updateLoginStatus();
  }, []);
  return (
    <>
      <BrowserRouter>
        <TopNavbar isToken={isToken} updateLoginStatus={updateLoginStatus} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/customerDetails" element={<CustomerDetails />} /> */}
          <Route
            path="/editCustomerDetails"
            element={<EditCustomerDetails />}
          />
          <Route path="/cards" element={<Cards />} />
          <Route path="/updatecard/:id" element={<EditCard />} />
          <Route path="/createCard" element={<CreateCard />} />

          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login updateLoginStatus={updateLoginStatus} />}
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
