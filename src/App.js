import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";

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
