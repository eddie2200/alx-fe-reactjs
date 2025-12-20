import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError("All fields are required");
      return;
    }

    const ingredientsList = ingredients.split(",").filter(Boolean);
    if (ingredientsList.length < 2) {
      setError("Please enter at least two ingredients");
      return;
    }

    setError("");
    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Recipe
      </h2>

      {error && (
        <p className="text-red-500 mb-4 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Ingredients (comma separated)
          </label>
          <textarea
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Preparation Steps
          </label>
          <textarea
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

