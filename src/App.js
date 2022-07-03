import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Drawer from "./components/Drawer";
import popularData from "./popularData";
import veganData from "./veganData";

function App() {
  // const [popular, setPopular] = useState([]);
  // const [vegan, setVegan] = useState([]);
  const [popular, setPopular] = useState(popularData);
  const [vegan, setVegan] = useState(veganData);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [isSearchShown, setIsSearchShown] = useState(false);

  function showSearchBar() {
    setIsSearchShown((prevShown) => !prevShown);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // useEffect(() => {
  //   const getPopular = async () => {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=meat&number=6`
  //     );
  //     const data = await api.json();
  //     console.log(data);
  //     setPopular(data.recipes);
  //   };

  //   const getVegan = async () => {
  //     const api = await fetch(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegan&number=6`
  //     );
  //     const data = await api.json();
  //     console.log(data);
  //     setVegan(data.recipes);
  //   };

  //   getPopular();
  //   getVegan();
  // }, [query]);

  const popularSlideElement = popular.map((recipe) => {
    return (
      <Slides
        key={recipe.id}
        image={recipe.image}
        time={recipe.readyInMinutes}
        title={recipe.title}
        price={(recipe.pricePerServing / 100).toFixed(2)}
        score={recipe.healthScore}
        summary={recipe.summary}
        vegan={recipe.vegan}
      />
    );
  });

  const veganSlideElement = vegan.map((recipe) => {
    return (
      <Slides
        key={recipe.id}
        image={recipe.image}
        time={recipe.readyInMinutes}
        title={recipe.title}
        price={(recipe.pricePerServing / 100).toFixed(2)}
        score={recipe.healthScore}
        summary={recipe.summary}
        vegan={recipe.vegan}
      />
    );
  });

  return (
    <div className="drawer bg-white">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar
          getSearch={getSearch}
          updateSearch={updateSearch}
          showSearchBar={showSearchBar}
          isSearchShown={isSearchShown}
        />

        <h2 className="slide-title mt-16">Popular Recipes</h2>
        <div className="carousel carousel-center px-4">
          {popularSlideElement}
        </div>

        <h2 className="slide-title">Veggies Recipes</h2>
        <div className="carousel carousel-center px-4">{veganSlideElement}</div>
      </div>

      <Drawer />
    </div>
  );
}

export default App;
