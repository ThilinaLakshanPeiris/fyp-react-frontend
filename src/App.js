
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Login from '../src/Authentication/Login';
import Register from '../src/Authentication/Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Navigation/Appheader';
import Appfooter from './Navigation/Appfooter';
import Tutorials from './Component/Tutorials';
import Dietplans from './Component/DietPlans';
import PoseEstimation from './Component/PoseEstimation';
import TrainingSchedule from './Component/TrainingSchedule';
import Nearestlocation from './Component/Nearestlocation';
import AboutUs from './Component/AboutUs';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Appheader></Appheader>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/Tutorials' element={<Tutorials/>}></Route>
        <Route path='/Dietplans' element={<Dietplans/>}></Route>
        <Route path='/PoseEstimation' element={<PoseEstimation/>}></Route>
        <Route path='/TrainingSchedule' element={<TrainingSchedule/>}></Route>
        <Route path='/Nearestlocation' element={<Nearestlocation/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
      </Routes>
      <Appfooter></Appfooter>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
