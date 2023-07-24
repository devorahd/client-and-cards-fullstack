import { useRef, useState } from 'react';

//all only background. not conected to anything yet

export default function EditCustomerDetails() {
  let [name, setName] = useState('');
  let emailRef = useRef();
  let oldPasswordRef = useRef();
  let [newPassword, setNewPassword] = useState('');
  let [conNewPassword, setConNewPassword] = useState('');
  let [isBusinessAccount, setIsBusinessAccount] = useState('');

  function editCustomer() {
    let editedUser = {
      name: name,
      email: email,
      password: password,
      isBusinessAccount: isBusinessAccount,
    };
    console.log('edit user');
  }
  return (
    <>
      <h1>Edit Customer Details</h1>
      <div>Name:</div>
      <input
        type="text"
        placeholder="Enter your name"
        defvalue={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Email:</div>
      <input type="text" placeholder="Enter your email" ref={emailRef} />
      <div>Old Password:</div>
      <input
        type="password"
        placeholder="Enter your password"
        ref={oldPasswordRef}
      />
      <div>New Password:</div>
      <input
        type="password"
        placeholder="Enter your password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <div>Confirm New Password:</div>
      <input
        type="password"
        placeholder="Confirm your password"
        value={conNewPassword}
        onChange={(e) => setConNewPassword(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        value={isBusinessAccount}
        onChange={(e) => setIsBusinessAccount(e.target.value)}
      />
      <span>Is this a Business Account</span>
      <br />
      <button onClick={editCustomer}>Edit Customer</button>
    </>
  );
}
