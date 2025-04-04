import React, { useState } from "react";
import caffeineDatabase from "../../db";
import api from "../../utils/api";
import styled from "styled-components";
import coffeeGif from "../../assets/giphy.gif"

const Button = styled.button`
  background-color: #99753f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7b5926;
  }

  &:disabled {
    background-color: #d1bda3;  
    cursor: not-allowed;       
    opacity: 0.6;             
  }
`;


const Add = ({ setMessage, setDrinkList }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const selectedCategoryData = caffeineDatabase.find(
    (item) => item.category === selectedCategory
  );
  const selectedDrinkData = selectedCategoryData?.drinks.find(
    (item) => item.name === selectedDrink
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const drinkData = {
      category: selectedCategory,
      name: selectedDrink,
      size: selectedSize,
      caffeineContent: selectedDrinkData.size[selectedSize],
    };

    try {
      const response = await api.post("/", drinkData);
      console.log("Drink added:", response.data);

      setDrinkList((prevList) => [...prevList, response.data.data]);

      setMessage("Drink added successfully!");
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Error adding drink:", err);
      setMessage("Failed to add drink.");
    }
  };

  return (
    <>
    <img src={coffeeGif} alt="Coffee gif" style={{ width: '300px', margin: '0 auto', display: 'block' }} />

    <form onSubmit={handleSubmit}>
      <h2>Hey, What did you drink?</h2>
      <label htmlFor="category">Category</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option>Choose</option>
        {caffeineDatabase.map((item) => (
          <option key={item.category} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <label htmlFor="drink">Drink</label>
          <select value={selectedDrink} onChange={handleDrinkChange}>
            <option>Choose</option>
            {selectedCategoryData?.drinks.map((drink) => (
              <option key={drink.name} value={drink.name}>
                {drink.name}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedDrink && selectedDrinkData && (
        <>
          <label htmlFor="size">Size</label>
          <select value={selectedSize} onChange={handleSizeChange}>
            <option>Choose</option>
            {Object.keys(selectedDrinkData.size).map((sizeKey) => (
              <option key={sizeKey} value={sizeKey}>
                {sizeKey} - {selectedDrinkData.size[sizeKey]} mg
              </option>
            ))}
          </select>
        </>
      )}

      <Button type="submit" disabled={!selectedCategory || !selectedDrink || !selectedSize}>
        Submit
      </Button>
    </form>
    </>
    
  );
};

export default Add;
