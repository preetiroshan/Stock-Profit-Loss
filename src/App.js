import { useState } from "react";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [change, setChange] = useState("");
  const [show, setShow] = useState(false);
  const findTotal = (price, quantity) => price * quantity;
  const calculate = () => {
    const totalCostPrice = findTotal(originalPrice, quantity);
    const totalSellingPrice = findTotal(newPrice, quantity);
    const difference = totalSellingPrice - totalCostPrice;
    setChange(difference);
    setShow(change ? true : false);
  };

  const handleClear = () => {
    setOriginalPrice("");
    setQuantity("");
    setNewPrice("");
    setChange("");
  };
  return (
    <>
      <div className="App">
        <div class="container">
          <div className="instructions">
            <h1>Stock Profit and Loss Calculator</h1>
            <label htmlFor="original-price">
              Enter the unit price of stock at which you bought it (in &#8377;)
            </label>
            <br />
            <input
              className="input-box"
              type="number"
              name="original-price"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
            />
            <br />
            <label htmlFor="quantity">Enter the number of stocks bought</label>
            <br />
            <input
              className="input-box"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br />
            <label htmlFor="newPrice">
              Enter the unit price of stock in the market today (in &#8377;)
            </label>
            <br />
            <input
              className="input-box"
              type="number"
              name="newPrice"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
            <br />
            <button className="btn" onClick={calculate}>
              Calculate
            </button>
          </div>
          {show && (
            <>
              {change ? (
                <>
                  <div className="result">
                    {`${change >= 0 ? "Profit" : "Loss"} is Rs. ${
                      change >= 0 ? change : 0 - change
                    }`}
                    <br />
                    {`${change >= 0 ? "Profit" : "Loss"} percentage  is ${(
                      ((change >= 0 ? change : 0 - change) / originalPrice) *
                      100
                    ).toFixed(2)}%`}
                  </div>
                  <button className="btn" onClick={handleClear}>
                    Clear
                  </button>
                </>
              ) : change === 0 ? (
                "No profit or Loss"
              ) : (
                "Please enter all the fields"
              )}
            </>
          )}
          )
        </div>
      </div>
      <Footer />
    </>
  );
}
