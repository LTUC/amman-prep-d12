import './App.css';
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
      <h1> App comp</h1>
      <Header/>
      {/* <Home/>
      <AboutUs/> */}
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<AboutUs/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
