import './App.scss';
import { Navbar } from "./components/Navbar/Navbar.js"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <div className='Main-Container'>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/componentes' element={<ItemListContainer/>}/>
          <Route path='/componentes/:categoryId' element={<ItemListContainer/>}/>
        </Routes>      
        
      </BrowserRouter>
      </div>
  );
}

export default App;
