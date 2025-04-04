import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import styled from "styled-components";
import coffeeCatGif from "../../assets/coffeeCat2.gif"

const calculateTotalCaffeine = (drinks) => {
  return drinks.reduce((sum, drink) => sum + drink.caffeineContent, 0);
}

const Home = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [totalCaffeine, setTotalCaffeine] = useState(0); 

  const getDrinks = async () => {
    try {
      const response = await api.get("/"); 
      const drinks = response.data.data;
      setDrinkList(drinks);

      const total = calculateTotalCaffeine(drinks);
      setTotalCaffeine(total);  
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div>
      <img src={coffeeCatGif} alt="Animated cat making coffee" style={{ width: '300px', margin: '0 auto', display: 'block' }} />

      <div>
        <h2>Your Total Caffeine Consumption</h2>
        {totalCaffeine > 0 ? (
          <p>Total Caffeine: {totalCaffeine} mg</p>  
        ) : (
          <p>No drinks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
