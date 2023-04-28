import { useContext } from "react";
import { FavFruitContext } from "../context/FavFruitContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const FavoriteFruit = ({fruits}) => {
  const { favFruitId } = useContext(FavFruitContext)
  const chosenFruit = fruits.find(fruit => fruit.id === favFruitId)
  console.log(chosenFruit);
  return (
    <>
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${chosenFruit.id}`}>{chosenFruit.name}</Link>
    </>
  );
}

export default FavoriteFruit;
