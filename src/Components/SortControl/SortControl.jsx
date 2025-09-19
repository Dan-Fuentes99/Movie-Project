import React from "react";
import "./SortControl.css";

function SortControl({ sortOrder, onChange }) {
  return (
    <div className="sort-control">
      <div className="sort-wrapper">
        <select value={sortOrder} onChange={(e) => onChange(e.target.value)}>
          <option value="asc">Sort by Year (Asc)</option>
          <option value="desc">Sort by Year (Desc)</option>
        </select>
      </div>
    </div>
  );
}

export default SortControl;
