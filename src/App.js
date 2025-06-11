// App.js
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './contex/CartContext';
import { AppRouter } from './AppRouter.js';

function App() {
    return (
        <div className='Main-Container'>
            <CartProvider>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
