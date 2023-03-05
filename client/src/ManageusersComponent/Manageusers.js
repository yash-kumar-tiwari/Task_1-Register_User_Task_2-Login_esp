import './Manageusers.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapi } from '../apiURL';

function Manageusers() {
  const [output, setOutput] = useState();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(()=>{
    axios.get(_webapi+"manageusers").then((result)=>{
      // console.log(result.data.userDetails)
      setUserDetails(result.data.userDetails);
    });
  },[]);

  return (
    <div id='manageusers'>
    {/* About Start */}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">

                <div class="col-lg-12">
                <h1>View User Details</h1>
                <br />
                
                <table className='table table-bordered'>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Info</th>
                  </tr>
                  {
              userDetails.map((row)=>(
                <tr>
                  <td>{row._id}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.info}</td>
                </tr>
              ))
            }                  
                </table>
                    
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
    </div>

  );
}

export default Manageusers;