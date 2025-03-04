import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 25.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 18.49, quantity: 2 },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping now!</p>
      ) : (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ddd" }}>
                <span>{item.name} - ${item.price}</span>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)} style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
          <button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
