import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Desert");
  console.log(name);
  console.log(category);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category,
    };

    onItemFormSubmit(newItem);
    setCategory("Desert");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
