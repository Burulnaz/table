import React, { useState } from "react";

const Paragraph = () => {
  const [text, setText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddParagraph = () => {
    if (text.trim() !== "") {
      setParagraphs([...paragraphs, text]);
      setText("");
    }
  };

  return (
    <div>
        <h3>task-2</h3>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddParagraph}>add</button>
      {paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default Paragraph;


