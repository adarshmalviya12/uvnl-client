import React, { useState, useEffect } from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader animate-spin border-t-8 border-blue-500 border-solid rounded-full h-32 w-32"></div>
    </div>
  );
};

export default Loader;
