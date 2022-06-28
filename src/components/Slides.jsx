import "./Slides.css";

const Slides = (props) => {
  return (
    <div className="carousel-item">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={props.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="">{props.title}</h2>
          <div className="content-container">
            <div className="prep-time--container">
              <p className="prep-time">Prep Time ⏱</p>
              <p className="value">{props.time}min</p>
            </div>
            <div className="price-per-serving--container">
              <p className="price-per-serving">Price per Serving 🍴</p>
              <p className="value">{props.price}</p>
            </div>
            <div className="health-score--container">
              <p className="health-score">Health Score ❤️</p>
              <p className="value">{props.score}</p>
            </div>
          </div>
          <div className="bottom">
            <p className="vegan">{props.vegan ? "🌿VEGAN" : " "}</p>
            <p className="go-to-recipe">Go to Recipe ⟶</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slides;
