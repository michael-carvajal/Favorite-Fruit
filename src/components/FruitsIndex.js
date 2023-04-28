import { Link } from "react-router-dom";
function FruitsIndex({fruits}) {
  console.log(fruits);
  return (
    <>
      <h2 className="fruits-index">Fruits Index</h2>
      {fruits.map(fruit => {
        return <Link to={`/fruits/${fruit.id}`} key={fruit.id}>{fruit.name}</Link>
     })}
    </>
  );
}

export default FruitsIndex;
