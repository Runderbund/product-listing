import{ useState } from 'react';
import styles from "./App.module.css"; // Using modular CSS for this project
import data from "./data/data.json";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer';


function App() {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  return (
    <div>
      <Header />
      <Footer /> {/* Currently hidden behind fixed header */}
    </div>
  );
}

export default App;