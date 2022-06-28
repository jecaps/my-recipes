import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slides from "./components/Slides";
import popularData from "./popularData";
import veganData from "./veganData";

function App() {
  const [popular, setPopular] = useState(popularData);
  const [vegan, setVegan] = useState(veganData);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const popularSlideElement = popular.map((recipe) => {
    return (
      <Slides
        key={recipe.id}
        image={recipe.image}
        time={recipe.readyInMinutes}
        title={recipe.title}
        price={recipe.pricePerServing}
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
        price={recipe.pricePerServing}
        score={recipe.healthScore}
        summary={recipe.summary}
        vegan={recipe.vegan}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="carousel carousel-center rounded-box">
        <h2 className="popular--title">Popular Recipes</h2>
        {popularSlideElement}
      </div>
      <div className="carousel carousel-center rounded-box">
        <h2 className="popular--title">Veggies Recipes</h2>
        {veganSlideElement}
      </div>
      <Footer submit={getSearch} search={search} change={updateSearch} />
    </>
  );
}

export default App;
