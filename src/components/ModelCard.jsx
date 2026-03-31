import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubsScription = () => {
    setIsSubscribed(true);

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, model]);
    toast.success("Item added to cart!");
  };

  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300 flex flex-col h-full bg-white">
      
      <div className="relative flex items-center gap-4 p-4">
  <img
    className="h-[60px] w-[60px] rounded-full object-cover"
    src={model.image}
    alt={model.name}
  />

  <span
    className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold uppercase ${
      model.tagType === 'new'
        ? 'bg-green-500 text-white'
        : 'bg-blue-600 text-white'
    }`}
  >
    {model.tag}
  </span>
</div>

      <div className="p-5 flex flex-col flex-grow space-y-3">
        <h2 className="text-2xl font-bold">{model.name}</h2>
        <p className="text-zinc-600 text-sm line-clamp-2">{model.description}</p>
        
        <ul className="text-sm space-y-1 flex-grow">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-zinc-700">
              <span className="text-green-500"><i class="fa-solid fa-check"></i></span> {feature}
            </li>
          ))}
        </ul>

        <div className="text-2xl font-bold text-zinc-900">
          ${model.price} <span className="text-sm font-normal text-zinc-500">/ {model.period}</span>
        </div>

        <button
          onClick={handleSubsScription}
          className={`btn w-full rounded-full mt-4 transition-colors ${
            isSubscribed ? "bg-green-600 hover:bg-green-700" : "bg-purple-500 hover:bg-purple-600"
          } text-white`}
        >
          {isSubscribed ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;