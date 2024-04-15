import React, { useState } from "react";
import ApexChart from "./ApexChart";
import Button from "./Buttons/Button";

function App() {
  const mybuttonTexts = ["USD", "EUR", "RUB", "GBP", "PPY"];

  return (
    <div className="p-20">
      <ApexChart />
      <div className="flex gap-4">
        {mybuttonTexts.map((el) => (
          <Button buttonText={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
