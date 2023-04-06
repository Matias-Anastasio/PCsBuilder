import './App.scss';
import { Navbar } from "./components/Navbar/Navbar.js"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContaier';
import { CartProvider } from './contex/CartContext';
import { Cart } from './components/Cart/Cart';

function App() {

	
    return (
		<div className='Main-Container'>
			<CartProvider>
				<BrowserRouter>
					<Navbar/>
					<Routes>
						<Route path='/' element={<ItemListContainer/>}/>
						<Route path='/:categoryId' element={<ItemListContainer/>}/>
						<Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
						<Route path='/cart' element={<Cart/>}/>
						<Route path="*" element={ <Navigate to="/" /> }/>
					</Routes>      

				</BrowserRouter>
			</CartProvider>
        </div>
    );
}

export default App;
