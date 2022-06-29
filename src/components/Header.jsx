import { useState } from "react";
import logo from "../images/kanzept-logo.png";

export default function Header() {
  const [isSearchShown, setIsSearchShown] = useState(false);

  function showSearchBar() {
    setIsSearchShown((prevShown) => !prevShown);
  }

  return (
    <div class="drawer bg-white">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="navbar bg-yellow-300">
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
        Content
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-yellow-300 text-yellow-900">
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </div>

    // <div class="navbar bg-yellow-300">
    //   <div class="navbar-start">
    //     <div class="dropdown">
    //       <label
    //         tabindex="0"
    //         class="btn btn-ghost btn-square focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b] swap swap-rotate"
    //       >
    //         <input type="checkbox" />
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="swap-off fill-current h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="rgb(113 63 18)"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M4 6h16M4 12h16M4 18h7"
    //           />
    //         </svg>

    //         <p
    //           class="swap-on fill-current text-yellow-900 text-2xl"
    //           // onClick={showDropDownBar}
    //         >
    //           ×
    //         </p>
    //       </label>

    //       <ul
    //         tabindex="0"
    //         class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    // <li>
    //   <a href="/">Homepage</a>
    // </li>
    // <li>
    //   <a href="/">Portfolio</a>
    // </li>
    // <li>
    //   <a href="/">About</a>
    // </li>
    //       </ul>
    //     </div>
    //   </div>

    // <div class="navbar-center">
    //   {!isSearchShown && (
    //     <a
    //       class="btn btn-ghost normal-case text-xl text-yellow-900 font-cursive focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b]"
    //       href="/"
    //     >
    //       Kanzepts{" "}
    //       <img
    //         src={logo}
    //         alt=""
    //         className="app-header--logo w-5 max-h-full"
    //       />
    //     </a>
    //   )}

    //   {isSearchShown && (
    //     <div class="form-control">
    //       <div class="input-group">
    //         <button
    //           class="btn btn-sm btn-square bg-yellow-50 text-yellow-900 border-0 focus:bg-yellow-100 active:bg-yellow-100 h-10 text-lg px-5"
    //           onClick={showSearchBar}
    //         >
    //           ×
    //         </button>
    //         <input
    //           type="text"
    //           placeholder="Search Recipe"
    //           class="input-sm bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:outline-0 active:outline-0 w-52 h-10"
    //         />
    //         <button class="btn btn-sm btn-square bg-yellow-50 text-yellow-900 border-0 focus:bg-yellow-100 active:bg-yellow-100 h-10 text-lg px-5">
    //           🔍︎
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>

    // <div class="navbar-end">
    //   {!isSearchShown && (
    //     <button
    //       class="btn btn-ghost btn-square focus:bg-[#facc156b] active::bg-[#facc156b] hover:bg-[#facc156b]"
    //       onClick={showSearchBar}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         class="h-5 w-5"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="rgb(113 63 18)"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //         />
    //       </svg>
    //     </button>
    //   )}

    //   <button class="btn btn-ghost btn-square focus:bg-[#facc156b] active:bg-[#facc156b] hover:bg-[#facc156b]">
    //     <div class="indicator">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         class="h-5 w-5"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="rgb(113 63 18)"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //         />
    //       </svg>
    //       <span class="w-[0.1rem] h-[0.1rem] rounded-[50%] bg-amber-600 text-xs p-1 indicator-item"></span>
    //     </div>
    //   </button>
    // </div>
    // </div>
  );
}
