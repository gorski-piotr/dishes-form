import { useState } from "react";

function DishesForm() {
  const [dishname, setDishname] = useState("");
  console.log(dishname);

  return (
    <div className="p-10 bg-yellow-500">
      <label htmlFor="dishname">Dish name: </label>
      <input
        type="text"
        name="dishname"
        id="dishname"
        placeholder="Dish name"
        value={dishname}
        onChange={(e) => setDishname(e.target.value)}
        required
      />
    </div>
  );
}

export default DishesForm;
