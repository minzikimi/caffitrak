import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import { motion } from 'framer-motion';
// import coffeeBeanIcon from "../../assets/cutebean.png"; 
import styled from 'styled-components';
import heartIcon from "../../assets/heart.png"
import brokenIcon from "../../assets/broken.png"


const calculateTotalCaffeine = (drinks) => {
  return drinks.reduce((sum, drink) => sum + drink.caffeineContent, 0);
};

const Home = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [totalCaffeine, setTotalCaffeine] = useState(0);

  const getDrinks = async () => {
    try {
      const response = await api.get('/');
      const drinks = response.data.data;
      setDrinkList(drinks);

      const total = calculateTotalCaffeine(drinks);
      setTotalCaffeine(total);
    } catch (err) {
      console.error('Error fetching drinks:', err);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <Container>
      {/* animated coffee bean */}
      <AnimatedIcon
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0.5,
        }}
        backgroundImage={totalCaffeine > 400 ? brokenIcon : heartIcon}/>

      <ContentWrapper>
        <h2>Your Daily Caffeine Intake</h2>
        {totalCaffeine > 0 ? (
          <p>Total Caffeine: <strong>{totalCaffeine} mg</strong></p>
        ) : (
          <p>No drinks added yet. Start adding your caffeine!</p>
        )}
      </ContentWrapper>
    </Container>
  );
};

const AnimatedIcon = styled(motion.div)`
  margin-top:5rem;
  display: block;
  width: 300px; 
  height: 300px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
`;

const ContentWrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #47261f;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.6rem;
    color: #6f6f6f;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export default Home;
