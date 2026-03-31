import { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  // Resolves the promise from App.jsx
  const models = use(modelPromise);

  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Premium Digital Tools</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model) => (
          <ModelCard 
            key={model.id} 
            model={model} 
            carts={carts} 
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;