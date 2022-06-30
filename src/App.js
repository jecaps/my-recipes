import { useState, useEffect } from "react";
import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import logo from "./images/kanzept-logo.png";
import Slides from "./components/Slides";
import popularData from "./popularData";
import veganData from "./veganData";

function App() {
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
    <div class="drawer bg-white">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <div class="navbar bg-yellow-300 fixed">
          <div class="navbar-start">
            <label
              for="my-drawer-3"
              class="btn btn-ghost btn-square focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgb(113 63 18)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>

          <div class="navbar-center">
            {!isSearchShown && (
              <a
                class="btn btn-ghost normal-case text-xl text-yellow-900 font-cursive focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b]"
                href="/"
              >
                Kanzepts{" "}
                <img
                  src={logo}
                  alt=""
                  className="app-header--logo w-5 max-h-full"
                />
              </a>
            )}

            {isSearchShown && (
              <div class="form-control">
                <div class="input-group">
                  <button
                    class="btn btn-sm btn-square bg-yellow-50 text-yellow-900 border-0 focus:bg-yellow-100 active:bg-yellow-100 h-10 text-lg px-5"
                    onClick={showSearchBar}
                  >
                    ×
                  </button>
                  <input
                    type="text"
                    placeholder="Search Recipe"
                    class="input-sm bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:outline-0 active:outline-0 w-52 h-10"
                  />
                  <button class="btn btn-sm btn-square bg-yellow-50 text-yellow-900 border-0 focus:bg-yellow-100 active:bg-yellow-100 h-10 text-lg px-5">
                    🔍︎
                  </button>
                </div>
              </div>
            )}
          </div>
          <div class="navbar-end">
            {!isSearchShown && (
              <button
                class="btn btn-ghost btn-square focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b]"
                onClick={showSearchBar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgb(113 63 18)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}

            <button class="btn btn-ghost btn-square focus:bg-[#facc156b] active:bg-[#facc156b] hover:bg-[#facc156b]">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgb(113 63 18)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span class="w-[0.1rem] h-[0.1rem] rounded-[50%] bg-amber-600 text-xs p-1 indicator-item"></span>
              </div>
            </button>
          </div>
        </div>

        <h2 className="slide-title mt-16">Popular Recipes</h2>
        <div className="carousel carousel-center rounded-box">
          {popularSlideElement}
        </div>

        <h2 className="slide-title">Veggies Recipes</h2>
        <div className="carousel carousel-center rounded-box">
          {veganSlideElement}
        </div>
      </div>

      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-64 bg-yellow-300 text-yellow-900 text-xl">
          <div>
            <img src={logo} alt="" className="w-11 max-h-full py-2 pl-2" />
            <div class="w-full border-b border-yellow-200"></div>
          </div>
          <li className="focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b] ">
            <a href="/" className="">
              <ion-icon name="home-outline"></ion-icon>
              Homepage
            </a>
          </li>
          <li className="focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b]">
            <a href="/" className="">
              <ion-icon name="fast-food-outline"></ion-icon> All Recipes
            </a>
          </li>
          <li className="focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b] ">
            <a href="/" className="">
              <ion-icon name="information-circle-outline"></ion-icon>
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
