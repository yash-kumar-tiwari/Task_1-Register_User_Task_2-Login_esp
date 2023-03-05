import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _webapi } from '../apiURL';

function Login() {
  
  const [ output , setOutput ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();

  const handleSubmit = (event)=>{
    event.preventDefault();

    var userDetails = { "email":email, "password":password };

    axios.post(_webapi+"login", userDetails).then((result)=>{
        // console.log(result.data.userDetails)
        console.log(result.data.token)
        if(result.data.token === "error")
        {
            // console.log("hello")
            setOutput("Invalid User or Verify Your Account...");
        }
        else
        {
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("_id", result.data.userDetails._id);
            localStorage.setItem("name", result.data.userDetails.name);
            localStorage.setItem("email", result.data.userDetails.email);
            localStorage.setItem("gender", result.data.userDetails.gender);
            localStorage.setItem("info", result.data.userDetails.info);

            if(result.data.userDetails.role === "admin")
            {
              setOutput("Logged in as Admin")
                // navigate("/admin");
            }
            else
            {
              setOutput("Logged in as User")
                // navigate("/user");
            }
        }
        // setOutput("Login Successfully");
        setEmail("");
        setPassword("");
    }).catch((err)=>{
        console.log(err);
    });
}

  return (
    <div id='login'>
    {/* About Start */}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-12">
                <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Login Page</h1>
                <font style={{"color":"Green"}}><b>{output}</b></font>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="email"> <b>Email:</b> </label>
                        <input required type="email" placeholder='Enter Your Email' class="form-control" name="email" value={email} onChange={element=>setEmail(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="pwd"> <b>Password:</b> </label>
                        <input required type="password" placeholder='Enter Your Password' class="form-control" name="password" value={password} onChange={element=>setPassword(element.target.value)} />
                    </div>
                    <br/>
                    <div>
                      <button type="submit" class="btn btn-success">Login</button>
                    </div>

                </form>                    
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
    </div>

  );
}

export default Login;