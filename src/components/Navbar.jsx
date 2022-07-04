import logo from "../images/kanzept-logo.png";

export default function Navbar(props) {
  return (
    <div className="navbar bg-yellow-300 fixed">
      <div className="navbar-start">
        <label for="my-drawer-3" className="navbar-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current h-5 w-5"
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

      <div className="navbar-center">
        {!props.isSearchShown && (
          <a
            className="btn btn-ghost normal-case text-xl text-yellow-900 font-cursive focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b]"
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

        {props.isSearchShown && (
          <div className="form-control">
            <form type="submit">
              <div className="input-group">
                <button className="searchbar-btn" onClick={props.showSearchBar}>
                  ×
                </button>
                <input
                  onChange={props.updateSearch}
                  type="text"
                  value={props.search}
                  placeholder="Search Recipe"
                  className="input-sm bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:outline-0 active:outline-0 w-48 h-10"
                />
                <button onClick={props.getSearch} className="searchbar-btn">
                  🔍︎
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="navbar-end">
        {!props.isSearchShown && (
          <button className="navbar-btn" onClick={props.showSearchBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

        <button className="navbar-btn">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <span className="w-[0.1rem] h-[0.1rem] rounded-[50%] bg-amber-600 text-xs p-1 indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
