import { useParams } from "react-router-dom";

function FruitShow({fruits}) {
  const { fruitId } = useParams()
  // console.log(fruitId);
  const chosenFruit = fruits.find(fruit => fruit.id === fruitId)
  // console.log(chosenFruit);
  return (
    <div className="fruit-show">
      <h2>{chosenFruit.name}</h2>
      <div>Color: {chosenFruit.color}</div>
      <div>Sweetness: {chosenFruit.sweetness}</div>
      <div>Seeds: {chosenFruit.seeds}</div>
    </div >
  );
}

export default FruitShow;
