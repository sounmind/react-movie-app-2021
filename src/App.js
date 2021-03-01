import CustomComponent from "./CustomComponent";
import { foodILike } from "./data";
import PropTypes from "prop-types";

function Food(properties) {
  const { foodName, imageSource, rating } = properties;
  return (
    <div>
      <h1> I like {foodName}</h1>
      <h2>{rating}/5.0</h2>
      <img alt={foodName} src={imageSource}></img>
    </div>
  );
}

Food.propTypes = {
  foodName: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map((food) => {
        return (
          <Food
            key={food.id}
            foodName={food.name}
            imageSource={food.image}
            rating={food.rating}
          ></Food>
        );
      })}
      <CustomComponent></CustomComponent>
    </div>
  );
}

export default App;
