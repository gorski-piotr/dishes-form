import { useState } from "react";

function DishesForm() {
  const [name, setName] = useState("");
  const [preparation_time, setPreparation_time] = useState("00:00:00");
  console.log("name:", name);
  console.log("", preparation_time);

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
    </div>
  );
}

export default DishesForm;
