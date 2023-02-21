import './App.scss';
import {Navbar} from "./components/Navbar/Navbar.js"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer.js"


function App() {
  return (
    <div className='Main-Container'>
      <Navbar/>
      <ItemListContainer greetings="Armá tu PC fácil y rápido"/>
    </div>
  );
}

export default App;
