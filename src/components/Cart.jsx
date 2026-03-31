import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item deleted!");
  };

  return (
<>
    <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4  mt-10">Premium Digital Tools</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>
    
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-2xl p-5 mt-10">
            <img className="h-50 w-50 mx-auto" src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" srcset="" />Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between rounded-lg p-4 bg-zinc-100 shadow-sm"
                key={item.id}
              >
                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover bg-white"
                  />

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-black capitalize text-lg">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  

                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-error btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-black p-6 mt-6 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-purple-500 text-white text-2xl h-16 rounded-full border-none"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;