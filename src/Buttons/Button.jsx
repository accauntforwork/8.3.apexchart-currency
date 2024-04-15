import React, { useState } from "react";
// import { Spinner } from "react-bootstrap"; // Import Spinner from React Bootstrap

const Button = (props) => {
  const [buttonText, setButtonText] = useState(props.buttonText);
  console.log(props);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setButtonText(buttonText);
    setIsLoading(false);
  };

  return (
    <button
      className={`
        px-4 py-2 rounded-md text-white font-bold w-32
        ${
          isLoading
            ? "bg-blue-500 bg-opacity-50 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        }
      `}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? ( // Display spinner when loading
        // <Spinner animation="border" size="sm" />
        <span>...</span>
      ) : (
        buttonText // Display button text when not loading
      )}
    </button>
  );
};

export default Button;
