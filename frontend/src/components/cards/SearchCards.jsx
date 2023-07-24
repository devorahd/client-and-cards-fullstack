import { useState } from 'react';

export default function SearchCards({ onChangeCard }) {
  let [text, setText] = useState('');

  return (
    <input
      type="text"
      placeholder="Enter text to search cards"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        onChangeCard(e.target.value);
      }}
    />
  );
}
