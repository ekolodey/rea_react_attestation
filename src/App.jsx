import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Item from './components/Item';
import Favorites from './components/Favorites';
import Cart from './components/Cart';

export default function App() {
  return (
    <div className='d-flex flex-column h-100'>
      <Header/>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/item/:id' element={<Item/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/' element={<FrontPage/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer/>
    </div>
  );
}