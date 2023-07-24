import { useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../services/storage';

export default function Login({ updateLoginStatus }) {
  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();
  let [token, setToken] = useState('');

  function loginUser() {
    let userSignin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (userSignin) {
      signin(userSignin)
        .then((res) => {
          if (!res.ok) {
            throw new Error('invaild email or password');
          }
          return res
            .json()
            .then((data) => {
              localStorage.setItem('token', data);
              setToken(data);
              updateLoginStatus();
              navigate('/');
            })
            .catch((error) => alert(error.message));
        })
        .catch((error) => {
          throw new Error(alert(error.message));
        });
    }
  }

  return (
    <>
      <h1>Log in - existing user</h1>
      <div>Email:</div>
      <input type="text" placeholder="Enter your email" ref={emailRef} />
      <div>Password:</div>
      <input
        type="password"
        placeholder="Enter your password"
        ref={passwordRef}
      />
      <button onClick={loginUser}>Log in</button>
      <section>User does not exist?</section>
      <Link to="/register">Register</Link>
    </>
  );
}
