import React, { useState } from "react";
import "./RecipeFinder.css"

function RecipeFinder() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
});

  const addToFavorites = (recipe) => {
  // Перевірка чи вже є
  if (!favorites.find(r => r.idMeal === recipe.idMeal)) {
    const updated = [...favorites, recipe];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }
};

const removeFromFavorites = (idMeal) => {
  const updated = favorites.filter(r => r.idMeal !== idMeal);
  setFavorites(updated);
  localStorage.setItem("favorites", JSON.stringify(updated));
};

  const searchRecipes = () => {

    setSelectedRecipe(null);
    setRecipes([]);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
      .then(res => res.json())
      .then(data => setRecipes(data.meals || []));
  };

  const getRecipeDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setSelectedRecipe(data.meals[0]));
  };
const [showFavorites, setShowFavorites] = useState(false);
  return (
<div className="app-wrapper">
    <main className="container">
      <header className="central-part">
        <h2 className="head">Recipe Finder</h2>
  <div>
    {/* Кнопка для відкриття/закриття */}
    <button onClick={() => setShowFavorites(true)} className="cart-btn">
      🛒 Recipe Box
    </button>

    {/* Модальне вікно */}
    {showFavorites && (
      <div className="modal-overlay" onClick={() => setShowFavorites(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h3>🛒 Recipe Box</h3>
          {favorites.length === 0 ? (
            <p>No saved receipes yet</p>
          ) : (
            <ul>
              {favorites.map(r => (
                <li key={r.idMeal}>
                  <span onClick={() => {setSelectedRecipe(r); 
                    setShowFavorites(false);
                    setTimeout(() => {
                document.getElementById("recipe-details")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
                  }
                    }>{r.strMeal}</span>
                  <button onClick={() => removeFromFavorites(r.idMeal)}>❌</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setShowFavorites(false)}>Close</button>
        </div>
      </div>
    )}
  </div>
      </header>

      <div className="central-part1">
        <input 
          className="inpt"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Input the ingredient..."
        />
        <button onClick={searchRecipes} className="srch-btn">Search</button>
      </div>

      <section className="divGrid">
        {recipes.map(meal => (
          <article
            key={meal.idMeal}
            className="card"
            onClick={() => {
              getRecipeDetails(meal.idMeal);
              setTimeout(() => {
                document.getElementById("recipe-details")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            <figure className="fgr">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <figcaption className="fgcap">{meal.strMeal}</figcaption>
            </figure>
          </article>
        ))}
      </section>

      <section id="recipe-details" className="recipe-details">
        {selectedRecipe && (
          <div className="details-card">
            <button onClick={() => addToFavorites(selectedRecipe)}>
            ➕ Add in the Box
            </button>
            <h3>{selectedRecipe.strMeal}</h3>
            <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
            <p><b>Category:</b> {selectedRecipe.strCategory}</p>
            <p><b>Area:</b> {selectedRecipe.strArea}</p>
            <div className="details-body">
              <h4>Instructions:</h4>
              <p className="instructions">{selectedRecipe.strInstructions}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  </div>
  );
}

export default RecipeFinder;
