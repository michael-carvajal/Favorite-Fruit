import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {

  const [name, setName] = useState("");
  const [color, setColor] = useState(COLORS[1]);
  const [sweetness, setSweetness] = useState(1);
  const [seed, setSeed] = useState("yes");
  const [validationErrors, setValidationErrors] = useState({});
  const history = useHistory()
  const onSubmit = e => {
    e.preventDefault()
    const formObj = { name, color, sweetness, seeds: seed }

    console.log(formObj);
    setName("")
    setColor("")
    setSweetness("")
    setSeed("")
    history.push('/');
  }


  useEffect(() => {
    const errors = {}
    if (name.length < 3) {
      errors.name = "Name must be 3 or more characters"
    }
    if (name.length > 20) {
      errors.name = "Name must be 20 characters or less"
    }
    if (sweetness<1 || sweetness > 10) {
      errors.sweetness = "Sweetness must be between 1 and 10"
    }
    if (fruits.find(fruit => name.toLowerCase() === fruit.name.toLowerCase())) {
      errors.name = "Name already exists"
    }

    setValidationErrors(errors)
    // console.log(validationErrors);
  }, [name, sweetness, fruits])

  // useEffect(() => {
  //   console.log("new Errors: ", validationErrors);
  // }, [validationErrors])
  return (
    <form
      className="fruit-form"
      onSubmit={onSubmit}
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {validationErrors.name && (<p className="errors">{validationErrors.name}</p>)}
      <label>
        Select a Color
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={(e) =>  setSweetness(e.target.value)}
        />
      </label>
        {validationErrors.sweetness && <p className="errors">{validationErrors.sweetness}</p>}
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seed === "no"}
          onChange={(e) => setSeed(e.target.value)}
          />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          checked={seed === "yes"}
          onChange={(e) => setSeed(e.target.value)}
          name="seeds"
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={Object.keys(validationErrors).length ? true : false}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
