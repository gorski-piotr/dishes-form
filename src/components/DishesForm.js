import { useState } from "react";

function DishesForm() {
  const [name, setName] = useState("");
  const [preparation_time, setPreparation_time] = useState("00:00:00");
  const [type, setType] = useState("");
  const [no_of_slices, setNo_of_slices] = useState("");
  const [diameter, setDiameter] = useState("");
  const [spiciness, setSpiciness] = useState("10");
  const [slices_of_bread, setSlices_of_bread] = useState("");

  console.log("name:", name);
  console.log("", preparation_time);
  console.log("type:", type);
  console.log("no_of_slices:", no_of_slices);
  console.log("diameter:", diameter);
  console.log("spiciness:", spiciness);
  console.log("slices_of_bread:", slices_of_bread);

  return (
    <div className="p-10 bg-yellow-500">
      {/* Text input for dish name */}
      <label htmlFor="name">Dish name: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Dish name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />

      {/* Time input for preparation time */}
      <label htmlFor="preparation_time">Preparation time: </label>
      <input
        type="time"
        step="1"
        name="preparation_time"
        id="preparation_time"
        value={preparation_time}
        onChange={(e) => setPreparation_time(e.target.value)}
        required
      />
      <br />

      {/* Select input for dish type */}
      <label htmlFor="type">Dish type:</label>
      <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
        <option value="">Choose dish type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>

      {/********** Conditial rendering (depending on dish type) **********/}

      {/* additional fields for pizza */}
      {type === "pizza" && (
        <div>
          <label htmlFor="no_of_slices">Number of slices:</label>
          <input
            type="number"
            id="no_of_slices"
            name="no_of_slices"
            min="1"
            onChange={(e) => setNo_of_slices(e.target.value)}
          />
          <br />
          <label htmlFor="diameter">Diameter:</label>
          <input
            type="number"
            step="0.01"
            id="diameter"
            name="diameter"
            onChange={(e) => setDiameter(e.target.value)}
          />
        </div>
      )}

      {/* additional fields for soup */}
      {type === "soup" && (
        <div>
          <label htmlFor="spiciness_scale">Spiciness:</label>
          <input
            type="range"
            id="spiciness_scale"
            name="spiciness_scale"
            min="1"
            max="10"
            onChange={(e) => setSpiciness(e.target.value)}
          />
          <span>{spiciness}</span>
        </div>
      )}

      {/* additional fields for sandwich */}
      {type === "sandwich" && (
        <div>
          <label htmlFor="slices_of_bread">Slices of bread:</label>
          <input
            type="number"
            id="slices_of_bread"
            name="slices_of_bread"
            min="1"
            onChange={(e) => setSlices_of_bread(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default DishesForm;
