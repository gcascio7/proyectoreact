import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <ItemListContainer numero="0"/>
    </div>
  );
}

export default App;
