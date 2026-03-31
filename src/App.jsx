import { useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Models from "./components/Models";
import NavBar from "./components/NavBar";
import { ToastContainer } from 'react-toastify';
import UserBanner from "./components/UserBanner";
import 'react-toastify/dist/ReactToastify.css'; 

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar />
      <Banner />
      <UserBanner/>
      
      <div className="tabs tabs-box justify-center bg-transparent gap-2 mt-7">

  <input
    type="radio"
    name="my_tabs_1"
    className="tab rounded-full w-40 
               checked:bg-purple-600 checked:text-white"
    aria-label="Models"
    onClick={() => setActiveTab("model")}
    defaultChecked
  />

  <input
    type="radio"
    name="my_tabs_1"
    className="tab rounded-full w-40 
               checked:bg-purple-600 checked:text-white"
    aria-label={`Cart (${carts.length})`}
    onClick={() => setActiveTab("cart")}
  />

</div>

      <main className="min-h-[60vh]">
        {activeTab === "model" && (
          <Models 
            modelPromise={modelPromise} 
            carts={carts} 
            setCarts={setCarts}
          />
        )}

        {activeTab === "cart" && (
          <Cart 
            carts={carts} 
            setCarts={setCarts}
          />
        )}
      </main>

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;