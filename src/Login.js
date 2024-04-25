import React ,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

//   const [email ,setEmail] = useState('');
//   const [password , setPassword] = useState('');

//   const signIn = e =>{
//       e.preventDefault()
//   }
//   const register = e =>{
//     e.preventDefault()
//     auth.createUserWithEmailAndPassword(email ,password)
//       .then((auth) => {
//         console.log(auth);
//       }) 
//       .catch(error =>alert(error.message))
        
// }
  
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password"  />
          <button type="submit" className="Login__signinButton" >Sign-in</button>
        </form>
        <p>
          This is a Fake Amazon Website created by Kshitij Garg. By signing-in you agree to the Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button   className="Login__registerButton">Create your amazon account</button>
      </div>
    </div>
  );
}

export default Login;
