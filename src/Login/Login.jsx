import { useState } from 'react';
import './Login.css';
const Login = () => {
 const [currentState,setcurrentState] = useState("Login");
  return (
    <div>
     <p className='Project-info'> Login Form Project</p>
    <div className="login-container">
      <div className="image-section"></div>
      <div className="form-section">
        <h2>{currentState}</h2>
        <form action="#" className="login-form">
        {
          currentState ==="Login"? '':(
            <>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" placeholder="Username" required/>   
            </>
          )
        }
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="example@gmail.com" required/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" required/>
            <div className="options">
              <p className="forget-password">forget password ?</p>
              {
                currentState==="Login" ? ( <p onClick={()=>setcurrentState("Sign Up")}>Create an  account</p>) : ( <p onClick={()=>setcurrentState("Login")}>Login Here</p>)
              }
             
            </div>
            <button className='login-btn' type="submit">
            {
              currentState === "Login" ? "Sign In" : "Sign Up"
            }
            </button>
        </form>
      </div>
    </div>
      <p className='Developer-info'> Developed by developer Ali Adam</p>
    </div>
  )
}

export default Login;