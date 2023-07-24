import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../services/storage';

export default function Register() {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let conPasswordRef = useRef();
  let isBusinessAccountRef = useRef();
  let navigate = useNavigate();

  function registerUser() {
    let newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      isBusinessAccount: isBusinessAccountRef.current.checked,
    };
    if (newUser) {
      if (passwordRef.current.value == conPasswordRef.current.value) {
        addUser(newUser)
          .then((res) => {
            if (!res.ok) {
              return res.json().then((data) => {
                throw new Error(data);
              });
            }
            return res
              .json()
              .then((res) => {
                alert('Registered user successfully');
                navigate('/login');
              })
              .catch((error) => alert(error.message));
          })
          .catch((error) => {
            throw new Error(alert(error.message));
          });
      } else {
        alert('password not confirmed');
      }
    }
  }

  return (
    <>
      <h1>Register - Add new user</h1>
      <div>Name:</div>
      <input
        type="text"
        placeholder="Enter your name"
        ref={nameRef}
        /*         value={name}
        onChange={(e) => setName(e.target.value)} */
      />
      <div>Email:</div>
      <input type="text" placeholder="Enter your email" ref={emailRef} />
      <div>Password:</div>
      <input
        type="password"
        placeholder="Enter your password"
        ref={passwordRef}
      />
      <div>Confirm Password:</div>
      <input
        type="password"
        placeholder="Confirm your password"
        ref={conPasswordRef}
      />
      <br />
      <input type="checkbox" ref={isBusinessAccountRef} />
      <span>Is this a Business Account</span>
      <br />
      <button onClick={registerUser}>Register</button>
      <section>Have an account?</section>
      <Link to="/login">Log in</Link>
    </>
  );
}
