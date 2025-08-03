import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import Navbar from './Navbar';
import IngredientForm from './IngredientForm';
import Generate from './Generate';


import { useEffect, useState } from 'react';

function App() {

  // let ingredients = [
  //   { name: "Cinnamon (oz)", quantity: 13, unit: "oz" },
  //   { name: "Milk (gal)", quantity: 1, unit: "gal" },
  //   { name: "Instant Coffee Powder (oz)", quantity: 32, unit: "oz" }
  // ];

  const [items, setItems] = useState(() => {
    const data = localStorage.getItem('data');
    return data ? JSON.parse(data) : '';
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(items));
  }, [items]);


  return (
          <div className="App">
            <Header/>
            <br></br>
            <IngredientForm items={items} setItems={setItems}/>
            <br></br>
            <Generate/>
          </div>
  );
}

export default App;
