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
    <div className="App container text-center mb-5">
      <div className="row text-center gx-1 gy-3">
        {recipes.map((recipe) => (
          <div id={recipe.sys.id} key={recipe.sys.id} className="col">
            <div className="card text-center m-auto" style={{ width: "18rem" }}>
              <img
                src={recipe.fields.titleImage.fields.file.url}
                className="card-img-top"
                alt={recipe.fields.title}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.fields.title}</h5>
                <div className="row text-center">
                  <div className="col text-start">
                    {recipe.fields.rating} stars
                  </div>
                  <div className="col text-end">by {recipe.fields.author}</div>
                </div>
                <p className="card-text" style={{ maxHeight: "60px" }}>
                  {recipe.fields.shortDescription}
                </p>
                <button className="btn btn-primary mt-5">Go to recipe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
