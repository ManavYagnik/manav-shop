
import './App.css';
import './MobileApp.css';
 
import Header from './components/Header';
import Main from './components/Main';
import {Route, Routes} from "react-router-dom";
import Cart from './components/Cart';
import Footer from './components/Footer'

import Contactform from './components/Contactform';
import Chakkifreshaata from './components/productdetails/Chakkifreshaata';
import Fortunesoyaoil from './components/productdetails/Fortunesoyaoil';
import Products from './components/Products';
import Comingsoon from './components/productdetails/Comingsoon';
import AddProductForm from './components/form/AddProductForm';

function App() {

 
  return (
    <div className="App">


      <Header />
      {/* <Products /> */}
      <Routes>
        <Route  path='/' element={<Main />}/>
        <Route  path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<Contactform />}/>
        <Route path='/chakkifreshaata' element={<Chakkifreshaata />}/>
        <Route path='/fortunesoyaoil' element={<Fortunesoyaoil />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/comingsoon' element={<Comingsoon />} />
        <Route path='/addproductsform' element={<AddProductForm />}/>
           
      </Routes>
      <Footer />
     
     
     
       
     
    </div>
  );
}

export default App;
