import './App.scss';
import { Navbar } from "./components/Navbar/Navbar.js"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js"
import { BrowserRouter, Routes, Route} from "react-router-dom"
// import { Hero } from './components/Hero/Hero';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContaier';

function App() {
  return (
      <div className='Main-Container'>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Hero/>}/> */}
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>      
        
      </BrowserRouter>
      </div>
  );
}

export default App;
