import React from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipesData.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
              <p className="text-gray-600 text-sm">
                Click to see full recipe details
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
