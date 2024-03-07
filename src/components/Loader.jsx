import React, { useState, useEffect } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      // Simulate a delay (e.g., fetching data, processing, etc.)
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(loadingTimer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {isLoading ? (
        <div className="loader animate-spin border-t-8 border-blue-500 border-solid rounded-full h-32 w-32"></div>
      ) : (
        <div>
          {/* Your main content goes here */}
          <h1 className="text-4xl font-bold">Welcome to my app!</h1>
        </div>
      )}
    </div>
  );
};

export default Loader;
