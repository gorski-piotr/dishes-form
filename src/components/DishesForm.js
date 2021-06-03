import { useState } from "react";

function DishesForm() {
  const [name, setName] = useState("");
  const [preparation_time, setPreparation_time] = useState("00:00:00");
  const [type, setType] = useState("");
  console.log("name:", name);
  console.log("", preparation_time);
  console.log("type:", type);

  return (
    <div className="p-10 bg-yellow-500">
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
      <label htmlFor="type">Dish type:</label>
      <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
        <option value="">Choose dish type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
    </div>
  );
}

export default DishesForm;
