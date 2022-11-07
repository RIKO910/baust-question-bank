import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Pages/shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Department from './Pages/Home/Department/Department';
import Cse from './Pages/Home/Department/Cse/Cse';
import SecondSection from './Pages/Home/SecondSection/SecondSection';
import Login from './Pages/Admin/Login/Login';
import Registration from './Pages/Admin/Registration/Registration';
import About from './Pages/About/About';
import Level1Term1 from './Pages/LavalTerm/Level1Term1';
import Showlevel1term1 from './Load/Showlevel1term1';
import useFirebase from './Pages/Hooks/useFirebase';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';


function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dept' element={<Department></Department>}></Route>
        <Route path='/dept/cse' element={<Cse></Cse>}></Route>
        <Route path='/detail' element={<SecondSection></SecondSection>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/level1term1' element={<Level1Term1></Level1Term1>}></Route>
        <Route path='/show' element={<Showlevel1term1></Showlevel1term1>}></Route>
        <Route path='/admin' element={<AdminHome></AdminHome>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
