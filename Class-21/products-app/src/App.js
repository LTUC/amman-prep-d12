import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import ProductsCategories from './components/ProductsCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import FavProducts from './components/FavProducts';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/productscategories' element={<ProductsCategories/>}></Route>
      <Route path="/favproducts" element={<FavProducts/>}></Route>
    </Routes>
    </>
  )
}

export default App;
