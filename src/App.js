import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Auth from "./components/Auth";
import { useState } from "react";
import { Routes, Route} from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch} />
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
        <Route
          path="/search/:query"
          element={<SearchResults query={query} />}
        />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
