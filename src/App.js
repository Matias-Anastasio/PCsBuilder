// App.js
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './contex/CartContext';
import { AppRouter } from './AppRouter.js';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop.js';

function App() {
    return (
        <div className='Main-Container'>
            <CartProvider>
                <BrowserRouter>
                    <ScrollToTop/>
                    <AppRouter />
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
