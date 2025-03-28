import React, { useState } from 'react';
import caffeineDatabase from '../../../../server/db';
import caffeineLogo from "../../assets/cutebean.png"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [drinkList, setDrinkList] = useState([]); 
  const [message, setMessage] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // setSelectedDrink(""); 
  };

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const selectedCategoryData = caffeineDatabase.find((item) => item.category === selectedCategory);
  const selectedDrinkData = selectedCategoryData?.drinks.find((item) => item.name === selectedDrink);


  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(selectedCategory);
    console.log(selectedDrink);
    console.log(selectedSize);

      // Display success message
   setMessage("Added!");
   setTimeout(() => {
    setMessage("");
  }, 2000);
  };

 
   

  return (
    <div>
      <h1>Caffeine Pulse</h1>
      <img src={caffeineLogo} alt="Caffeine Logo" style={{ width: '200px', margin: '0 auto', display: 'block' }} />

      <form  onSubmit={handleSubmit}>
        <h2>Add your drink</h2>
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
    </div>
  );
};

export default Home;
