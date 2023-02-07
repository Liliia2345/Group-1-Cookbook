import { useState, useEffect } from "react";
const contentful = require("contentful");

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      environment: process.env.REACT_APP_ENVIRONMENT_ID,
    });
    client
      .getEntries()
      .then((res) => setRecipes(res.items))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>
          <h2>{recipe.fields.title}</h2>
          <h3>{recipe.fields.author}</h3>
          <p>{recipe.fields.shortDescription}</p>
          <p>Rating: {recipe.fields.rating}</p>
          <img
            src={recipe.fields.titleImage.fields.file.url}
            alt={recipe.fields.title}
            style={{ width: "200px" }}
          />
        </div>
      ))}
    </div>
  );
}
