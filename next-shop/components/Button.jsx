import React, { useState } from "react";

export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="bg-green-800 text-white p-2 mt-3 hover:bg-green-600 rounded "
    >
      {children}
    </button>
  );
}
