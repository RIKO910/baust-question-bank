import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Pages/shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Department from './Pages/Home/Department/Department';
import Cse from './Pages/Home/Department/Cse/Cse';
import SecondSection from './Pages/Home/SecondSection/SecondSection';
import About from './Pages/About/About';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import ShowLevel1term1 from './Pages/Home/Department/Cse/Load/Showlevel1term1';
import Level1Term1 from './Pages/Home/Department/Cse/LevelTerm/Level1Term1'
import Level1Term2 from './Pages/Home/Department/Cse/LevelTerm/Level1Term2'
import Level2Term1 from './Pages/Home/Department/Cse/LevelTerm/Level2Term1'
import Level2Term2 from './Pages/Home/Department/Cse/LevelTerm/Level2Term2'
import Level3Term1 from './Pages/Home/Department/Cse/LevelTerm/Level3Term1'
import Level3Term2 from './Pages/Home/Department/Cse/LevelTerm/Level3Term2'
import Level4Term1 from './Pages/Home/Department/Cse/LevelTerm/Level4Term1'
import Level4Term2 from './Pages/Home/Department/Cse/LevelTerm/Level4Term2'
import ShowLevel1Term2 from './Pages/Home/Department/Cse/Load/ShowLevel1Term2';
import ShowLevel2Term1 from './Pages/Home/Department/Cse/Load/ShowLevel2Term1';
import ShowLevel2Term2 from './Pages/Home/Department/Cse/Load/ShowLevel2Term2';
import ShowLevel3Term1 from './Pages/Home/Department/Cse/Load/ShowLevel3Term1';
import ShowLevel3Term2 from './Pages/Home/Department/Cse/Load/ShowLevel3Term2';
import ShowLevel4Term1 from './Pages/Home/Department/Cse/Load/ShowLevel4Term1';
import ShowLevel4Term2 from './Pages/Home/Department/Cse/Load/ShowLevel4Term2';
import EditDept from './Pages/Admin/EditDept/EditDept';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dept' element={<Department></Department>}></Route>
        <Route path='/dept/cse' element={<Cse></Cse>}></Route>
        <Route path='/detail' element={<SecondSection></SecondSection>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/level1term1' element={<Level1Term1></Level1Term1>}></Route>
        <Route path='/level1term2' element={<Level1Term2></Level1Term2>}></Route>
        <Route path='/level2term1' element={<Level2Term1></Level2Term1>}></Route>
        <Route path='/level2term2' element={<Level2Term2></Level2Term2>}></Route>
        <Route path='/level3term1' element={<Level3Term1></Level3Term1>}></Route>
        <Route path='/level3term2' element={<Level3Term2></Level3Term2>}></Route>
        <Route path='/level4term1' element={<Level4Term1></Level4Term1>}></Route>
        <Route path='/level4term2' element={<Level4Term2></Level4Term2>}></Route>
        <Route path='/show11' element={<ShowLevel1term1></ShowLevel1term1>}></Route>
        <Route path='/admin' element={<AdminHome></AdminHome>}></Route>
        <Route path='/show12' element={<ShowLevel1Term2></ShowLevel1Term2>}></Route>
        <Route path='/show21' element={<ShowLevel2Term1></ShowLevel2Term1>}></Route>
        <Route path='/show22' element={<ShowLevel2Term2></ShowLevel2Term2>}></Route>
        <Route path='/show31' element={<ShowLevel3Term1></ShowLevel3Term1>}></Route>
        <Route path='/show32' element={<ShowLevel3Term2></ShowLevel3Term2>}></Route>
        <Route path='/show41' element={<ShowLevel4Term1></ShowLevel4Term1>}></Route>
        <Route path='/show42' element={<ShowLevel4Term2></ShowLevel4Term2>}></Route>
        <Route path='/editDept' element={<EditDept></EditDept>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
