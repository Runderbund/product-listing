import{ useState } from 'react';
import "./App.css";
import data from "./data/data.json";

function App() {
  const [allProducts, setAllProducts] = useState(data); // "Gotcha", "not quite in a useable state"
  return (
    <div>
      <h1>Hello, Student!</h1>
    </div>
  );
}

export default App;