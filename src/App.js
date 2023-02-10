import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Search from './components/Search';
import Recipes from './components/Recipes';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Gallery />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
