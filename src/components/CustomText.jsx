import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const CustomText = () => {
  const snap = useSnapshot(state);
  return (
    <div className="custom-text-container">
      <div className="flex-1 flex flex-col">
        <input
          type="text"
          placeholder="Enter custom text"
          value={snap.customText}
          onChange={(e) => (state.customText = e.target.value)}
          className="px-2 py-1 border rounded mb-2"
        />

        <label>Font Size:</label>
        <input
          type="number"
          value={snap.fontSize || 0.05}
          onChange={(e) => (state.fontSize = parseFloat(e.target.value))}
          className="px-2 py-1 border rounded mb-2"
          min="0.05"
          step="0.01"
        />

        <label>Font Color:</label>
        <input
          type="color"
          value={snap.fontColor || "#000000"}
          onChange={(e) => (state.fontColor = e.target.value)}
          className="px-2 py-1 border rounded"
        />
      </div>
    </div>
  );
};

export default CustomText;
