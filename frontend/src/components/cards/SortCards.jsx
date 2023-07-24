import { useState } from 'react';

export default function SortCards({ onOrderChange }) {
  let [order, setOrder] = useState('asc');

  return (
    <>
      <label>Sort by business name:</label>
      <select
        className="sort"
        onChange={(e) => {
          setOrder(e.target.value);
          onOrderChange(e.target.value);
        }}
      >
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </>
  );
}
