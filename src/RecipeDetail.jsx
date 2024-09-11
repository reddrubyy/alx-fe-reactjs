import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-6">{recipe.summary}</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Ingredients:</h2>
        <ul className="list-disc ml-6">
          {/* Add ingredients here if available in your data */}
        </ul>
      </div>
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Instructions:</h2>
        <p>
          {/* Add instructions here if available in your data */}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
