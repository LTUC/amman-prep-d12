
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import FavList from './components/FavList';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/favlist" element={<FavList/>}></Route>
    </Routes>
    </>
  )
}

export default App;
