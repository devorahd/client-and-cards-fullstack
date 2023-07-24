/* import { useEffect } from 'react';
import { useState } from 'react';
import { getUsers } from '../../services/storage';

export default function CustomerDetails() {
  const [tempUsers, setTempUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((usersJSON) => {
        setTempUsers(usersJSON);
      })
      .catch((error) => alert(error.message));
  }, []);

  if (!tempUsers) return <section>No data</section>;
  let customersUl = tempUsers.map((c, i) => {
    return (
      <ul key={i}>
        <li>Id (erase afterwards): {c._id}</li>
        <li>Customers name: {c.name}</li>
        <li>Customers email: {c.email}</li>
        <li>password: {c.password}</li>
        <li>
          {c.isBusinessAccount ? 'Business Account' : 'Not Business Account'}
        </li>
        <br />
      </ul>
    );
  });
  return <div>{customersUl}</div>;
}
 */
