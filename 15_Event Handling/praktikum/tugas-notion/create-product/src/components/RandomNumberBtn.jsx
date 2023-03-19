import React, { useState } from "react";

export default function RandomNumberBtn() {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNum);
    setRandomNumber(randomNum);
  };

  return (
    <div className="d-grid mt-5">
      <button className="btn btn-primary" onClick={handleRandomNumber}>
        Random Number
      </button>
    </div>
  );
}
