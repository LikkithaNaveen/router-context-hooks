import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ContextItems from './Components/ContextItems';
import { useContext,useState } from 'react';

function App() {
  const [cart,setcart]=useState(0)
  //const [data, setData] = useState(products);
  
  return (
    <div>
     
      <Navbar cart={cart}/>
      <ContextItems cart={cart} setcart={setcart}/>
      
    </div>
  );
}

export default App;
