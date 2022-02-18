import React from "react";
import Input from "./Input";

export default function Field({ label, children }) {
  return (
    <labal className="block">
      <span className="block text-sm text-gray-600">{label}</span>
      {children}
    </labal>
  );
}
