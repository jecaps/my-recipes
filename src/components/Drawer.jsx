import logo from "../images/kanzept-logo.png";

export default function Drawer() {
  return (
    <div className="drawer-side">
      <label for="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-64 bg-yellow-300 text-yellow-900 text-xl">
        <div>
          <img src={logo} alt="" className="w-11 max-h-full py-2 pl-2" />
          <div className="w-full border-b border-yellow-200"></div>
        </div>
        <li className="">
          <a href="/" className="drawer-item">
            <ion-icon name="home-outline"></ion-icon>
            Homepage
          </a>
        </li>
        <li className="">
          <a href="/" className="drawer-item">
            <ion-icon name="fast-food-outline"></ion-icon> All Recipes
          </a>
        </li>
        <li className="">
          <a href="/" className="drawer-item">
            <ion-icon name="information-circle-outline"></ion-icon>
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
