const Slides = (props) => {
  return (
    <div className="carousel-item mb-8 mx-2 -z-10">
      <div className="card w-[21rem] h-[25rem] bg-yellow-50 shadow-lg shadow-yellow-700/20">
        <figure>
          <img src={props.image} alt="Shoes" />
        </figure>
        <div className="card-body px-6 py-4">
          <h2 className="text-xl font-bold text-slate-800 capitalize whitespace-nowrap overflow-hidden text-ellipsis">
            {props.title}
          </h2>
          <div className="content-container flex justify-evenly p-2">
            <div className="prep-time--container border-r border-slate-300">
              <p className="prep-time">Prep Time ⏱</p>
              <p className="value">{props.time}min</p>
            </div>

            <div className="price-per-serving--container border-r border-slate-300">
              <p className="price-per-serving">Price/serving 🍴</p>
              <p className="value">{props.price}</p>
            </div>

            <div className="health-score--container">
              <p className="health-score">Health Score ❤️</p>
              <p className="value">{props.score}</p>
            </div>
          </div>

          <div className="bottom flex justify-between p-1">
            <p className="vegan text-green-800">
              {props.vegan ? "🌿 VEGAN" : " "}
            </p>
            <p className="go-to-recipe text-end text-sky-600">Go to Recipe ⟶</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;
