import React, { useEffect, useState } from 'react';
import caffeineDatabase from '../../db';
import caffeineLogo from "../../assets/cutebean.png"
import api from '../../utils/api';
import styled from "styled-components";

const StyledButton = styled.button`
  background-color:#99753F;
  color: white; 
  padding: 10px 20px; 
  border: none; 
  border-radius: 5px;
  cursor: pointer; 
  font-size: 16px; 
  transition: background-color 0.3s ease; 

  &:hover {
    background-color:#7B5926;
  }
`;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [drinkList, setDrinkList] = useState([]); 
  const [message, setMessage] = useState("");
  const [caffeineIntake, setCaffeineIntake] = useState(0); 

  const getDrinks = async () => {
    try {
      const response = await api.get("/"); 
      setDrinkList(response.data.data); 
      console.log("fetched Drinks:", response.data.data);
    } catch (error) {
      console.error("error fetching drinks:", error);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const selectedCategoryData = caffeineDatabase.find((item) => item.category === selectedCategory);
  const selectedDrinkData = selectedCategoryData?.drinks.find((item) => item.name === selectedDrink);

  return (
    <div>
      <h1>Caffeine Pulse</h1>
      <img src={caffeineLogo} alt="Caffeine Logo" style={{ width: '200px', margin: '0 auto', display: 'block' }} />

      <StyledButton>Add</StyledButton>

      <form onSubmit={handleSubmit}>
        <h2>Hey, What did you drink?</h2>
        <label htmlFor='category'>Category</label>
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
            <label htmlFor='drink'>Drink</label>
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
            <label htmlFor='size'>Size</label>
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
        <button type="submit" disabled={!selectedCategory || !selectedDrink || !selectedSize}>
          Submit
        </button>
        {message && <p>{message}</p>}
      </form>

      <div>
        <h2>Your Drinks</h2>
        {Array.isArray(drinkList) && drinkList.length > 0 ? (
          <ul>
            {drinkList.map((drink) => (
              <li key={drink._id}>
                {drink.category} - {drink.name} ({drink.size}) - {drink.caffeineContent} mg
              </li>
            ))}
          </ul>
        ) : (
          <p>No drinks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
