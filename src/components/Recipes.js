import { useState, useEffect } from "react";
const contentful = require("contentful");

export default function App() {
  const [recipes, setRecipes] = useState([]);
  /*   const SPACE_ID = "gll392hbsiba";
  const ENVIRONMENT_ID = "master";
  const ACCESS_TOKEN = "uRx-_ftxy7bxQ0HBNR21Wd4zMnwguYt5HjlGaV_3lbI"; */

  const SPACE_ID = process.env.REACT_APP_SPACE_ID;
  const ENVIRONMENT_ID = process.env.REACT_APP_ENVIRONMENT_ID;
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
      environment: ENVIRONMENT_ID,
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
