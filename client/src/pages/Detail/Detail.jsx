import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import styled from 'styled-components';
import "./Detail.css";


const Container = styled.div`
  width: 100%;
    display:flex;
    flex-direction : column;
    justify-content:center;
    align-items:center;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const HeadingTitle = styled.h1`
  transform: rotate(2deg);
  padding: 0.2rem 1.2rem;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  background-color: #fdcb6e;
  font-size: 1.5rem;
`;

const DrinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const DrinkItem = styled.li`
  text-align: left;
  position: relative;
  padding: 0.5rem;
`;

const Detail = () => {
  const [drinkList, setDrinkList] = useState([]);

  const getDrinks = async () => {
    try {
      const response = await api.get("/"); // fetching drinks from the backend
      setDrinkList(response.data.data);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <main>
    <Container>
      <Heading>
        <HeadingTitle>Drink Details</HeadingTitle>
      </Heading>

      <div>
        {Array.isArray(drinkList) && drinkList.length > 0 ? (
          <DrinkList>
            {drinkList.map((drink) => (
              <DrinkItem key={drink._id}>
                {drink.category} - {drink.name} ({drink.size}) - {drink.caffeineContent} mg
              </DrinkItem>
            ))}
          </DrinkList>
        ) : (
          <p>No drinks added yet.</p>
        )}
      </div>
    </Container>
    </main>
    
  );
};

export default Detail;
