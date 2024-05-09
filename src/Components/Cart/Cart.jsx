import React from "react";
import "./Cart.css";
import Button from "../Button/Button";

function formatTotalPrice(price) {
  const formattedPrice = String(price);
  const decimalIndex = formattedPrice.indexOf('.');
  const decimalPlaces = decimalIndex === -1 ? 0 : formattedPrice.length - decimalIndex - 1;
  
  let result = formattedPrice;
  if (decimalPlaces < 5) {
    const zerosToAdd = 5 - decimalPlaces;
    for (let i = 0; i < zerosToAdd; i++) {
      result += '0';
    }
  }
  
  return result;
}

function Cart({ cartItems, onCheckout}) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span className="">Total Price: {formatTotalPrice(totalPrice)} ETH</span>
      <Button
        title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
