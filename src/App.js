import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Recipes />
      <Footer />
    </div>
  );
}

export default App;
