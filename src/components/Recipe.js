import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RichText from "./RichText";
const contentful = require("contentful");

export default function Recipe() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      environment: process.env.REACT_APP_ENVIRONMENT_ID,
    });
    client
      .getEntries({
        "sys.id": id,
      })
      .then((res) => setRecipes(res.items))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="App container mt-5 mb-5 text-start">
      <div className="row">
        {recipes.map((recipe) => (
          <div id={recipe.sys.id} key={recipe.sys.id} className="col">
            <div
              className="card text-light mb-3"
              style={{
                backgroundColor: "#555",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4 bg-dark rounded-start">
                  <img
                    src={recipe.fields.titleImage.fields.file.url}
                    className="img-fluid rounded-start"
                    alt={recipe.fields.title}
                    style={{ minWidth: "100%" }}
                  />
                </div>
                <div className="col-md-8 p-3">
                  <div className="card-body">
                    <h1 className="card-title">{recipe.fields.title}</h1>
                    <p className="card-text my-3">
                      {recipe.fields.shortDescription}
                    </p>
                    <div className="row text-center mt-4 p-2 bg-black text-light rounded-top">
                      <div className="col-md-4 text-start">
                        {recipe.fields.rating} stars
                      </div>
                      <div className="col-md-8 text-start">
                        Written by {recipe.fields.author}
                      </div>
                    </div>
                    <div className="row text-center mb-4 p-2 bg-warning text-dark rounded-bottom">
                      <div className="col-md-4 text-start">
                        Takes {recipe.fields.preparationTime}
                      </div>
                      <div className="col-md-4 text-start">
                        Serves {recipe.fields.servings}
                      </div>
                      <div className="col-md-4 text-start">
                        {recipe.fields.calories} calories
                      </div>
                    </div>
                    <div className="row text-center my-3">
                      <div className="col-md-4 text-start">
                        <h2 className="mb-3">You will use</h2>
                        <ul className="list-group list-group-flush col-10">
                          {recipe.fields.ingredients.map((ingredient, i) => (
                            <li
                              key={i}
                              className="list-group-item bg-transparent text-light border-0 ps-0"
                            >
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-8 text-start">
                        <h2 className="mb-3">To do this</h2>
                        <div className="card-text">
                          <RichText content={recipe.fields.description} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
