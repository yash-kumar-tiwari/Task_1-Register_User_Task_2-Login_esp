import './App.css';
import {Routes, Route} from 'react-router-dom';

//import components
import Nav from './NavComponent/Nav';
import Main from './MainComponent/Main';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Manageusers from './ManageusersComponent/Manageusers';

function App() {
  return (
    <div className="App">

    <Nav/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/manageusers' element={<Manageusers/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
