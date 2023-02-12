import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Gallery />
              <Recipes />
            </>
          }
        />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
