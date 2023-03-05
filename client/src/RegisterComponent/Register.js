import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { _webapi } from '../apiURL';

function Register() {
  
    const [ output , setOutput ] = useState();
    const [ validate , setValidate ] = useState();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ confpassword , setConfPassword ] = useState();
    const [ gender , setGender ] = useState();
    const [ file , setFile ] = useState();

    const handleChange = (event)=>{
      setFile(event.target.files[0]);    
    }

    const handleSubmit = (event)=>{
      event.preventDefault();

      if( name.length < 4 )
      {
        setValidate("Name must be atleast 4 characters long");
      }
      else if(email.length < 10 )
      {
        setValidate("Email must be atleast 10 characters long & must have @ in it like abcde@gmail.com ");
      }
      else if(password.length < 5 || password.length > 10)
      {
        setValidate("Password must be between 5-10 characters long");
      }
      else if(password!==confpassword)
      {
        setValidate("Passwords do not match");
      } 
      else if(!gender)
      {
        setValidate("Gender must be selected");
      }
      else if(!file)
      {
        setValidate("Please upload a profile picture");
      }
      else 
      {
          var formData = new FormData();
          formData.append('name', name);
          formData.append('email', email);
          formData.append('password', password);
          formData.append('cpassword', confpassword);
          formData.append('gender', gender);
          formData.append('profilepic',file);
          // console.log(formData);

          const config = {'content-type':'multipart/form-data'};
          axios.post(_webapi+"register", formData, config).then((result)=>{
            console.log(result.data.output)
            setOutput(result.data.output);
            setValidate('');
            setName('');
            setEmail('');
            setPassword('');
            setConfPassword('');
            setGender('');
            setFile('');
        }).catch((error)=>{
          console.log(error)
          setOutput("Error Occurred on Server... User Not Registered");
          setName('');
          setEmail('');
          setPassword('');
          setConfPassword('');
          setGender('');
          setFile('');        
        });
      }
    }

  return (
    <div id='register'>
    {/* About Start */}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-12">
                <h1 class="text-primary font-weight-semi-bold text-uppercase mb-3">Register Page</h1>
                <font style={{"color":"Green"}}>{output}</font>
                <font style={{"color":"red"}}>{validate}</font>
                <form>
                    <div class="form-group">
                        <label for="name"> <b>Name:</b> </label>
                        <input required type="text" placeholder='Enter Your Name' class="form-control" name="name" value={name} onChange={element=>setName(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="email"> <b>Email:</b> </label>
                        <input required type="text" placeholder='Enter Your Email' class="form-control" name="email" value={email} onChange={element=>setEmail(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="pwd"> <b>Password:</b> </label>
                        <input required type="password" placeholder='Enter Your Password' class="form-control" name="password" value={password} onChange={element=>setPassword(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="pwd"> <b>Confirm Password:</b> </label>
                        <input required type="password" placeholder='Confirm Password' class="form-control" name="cpassword" value={confpassword} onChange={element=>setConfPassword(element.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="gender"> <b>Gender:</b> </label>
                        &nbsp;&nbsp;
                        <input type="radio" name="gender" value="male" onChange={element=>setGender(element.target.value)} /> Male
                        &nbsp;&nbsp;
                        <input type="radio" name="gender" value="female" onChange={element=>setGender(element.target.value)} /> Female
                    </div>
                    <div class="form-group">
                        <label for="profilePic"> <b>Profile Pic:</b> </label>
                        &nbsp;&nbsp;
                        <input required type="file" class=".form-control-file" name='profilepic' onChange={handleChange} />
                    </div>
                    <br/>
                    <div>
                      <button type='button' onClick={handleSubmit} class="btn btn-success">Register</button>
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

export default Register;