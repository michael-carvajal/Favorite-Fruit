import { useEffect, useState } from "react";
import { CustomFavFruithook } from "../context/FavFruitContext";

const SetFavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = CustomFavFruithook()
  // const [fav, setFav] = useState(favFruitId) // Set the initial value of fav to favFruitId from the context
  const handleSelect = e => {
    // setFav(e.target.value)
    setFavFruitId(e.target.value)
  }
  // useEffect(() => {
  //   // console.log("Fav: ", fav);
  //   console.log("FavFruitId: ", favFruitId);
  // }, [ favFruitId])
  return (
    <div className="set-fav-fruit">
      <h2>Select your Favorite Fruit</h2>
      <label>
        <select
          value={favFruitId}
          onChange={handleSelect}
        >
          {fruits.map(fruit => (
            <option
              key={fruit.id}
              value={fruit.id}
            >
              {fruit.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SetFavoriteFruit;
