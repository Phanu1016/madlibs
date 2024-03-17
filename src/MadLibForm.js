import React, { useState } from "react";

const MadLibForm = ({ addItem }) => {
  const INITIAL_STATE = {noun1 : "", noun2 : "", adjective: "", color: "", added: false};
  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleSubmit = event => {
    event.preventDefault();
    formData.added = true
    addItem(formData);
    setFormData(INITIAL_STATE);
  };


  const handleChange = event => {
    const { name, value }= event.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Noun1">Noun1:</label>
      <input
        id="noun1"
        name="noun1"
        value={formData.noun1}
        onChange={handleChange}
      />

      <label htmlFor="Noun2">Noun2:</label>
      <input
        id="noun2"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
      />

      <label htmlFor="adjective">adjective:</label>
      <input
        id="adjective"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />

      <label htmlFor="color">color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Get Story</button>
    </form>
  );
};

export default MadLibForm;