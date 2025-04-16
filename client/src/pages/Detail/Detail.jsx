import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import styled from 'styled-components';
import coffeeIcon from "../../assets/coffee.svg";
import teaIcon from "../../assets/tea.svg";
import cokeIcon from "../../assets/coke.svg";
import energydrinkIcon from "../../assets/energy-drink.svg";
import Button from '../../components/Button';
import Modal from '../../components/Modal';

const Detail = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drinkToDelete, setDrinkToDelete] = useState(null);

  const getDrinks = async () => {
    try {
      const response = await api.get("/"); 
      setDrinkList(response.data.data);
    } catch (err) {
      console.error("Error fetching drinks:", err);
    }
  };

  const deleteDrinks = async (id) => {
    try {
      await api.delete(`/${id}`);
      setDrinkList((prevList) => prevList.filter((drink) => drink._id !== id));
    } catch (err) {
      console.error("Error deleting drink:", err);
    }
  };

  const handleDeleteClick = (id) => {
    setDrinkToDelete(id);
    setIsModalOpen(true); 
  };

  const handleModalConfirm = () => {
    if (drinkToDelete) {
      deleteDrinks(drinkToDelete);
      setIsModalOpen(false); 
      setDrinkToDelete(null); 
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false); 
    setDrinkToDelete(null); 
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const categoryIcons = {
    "Coffee": coffeeIcon,
    "Tea": teaIcon,
    "Energy Drink": energydrinkIcon,
    "Carbonated Drinks": cokeIcon,
  };

  return (
    <main>
      <Container>
        <Heading>
          <HeadingTitle id="drink-details-title">Drink Details</HeadingTitle>
        </Heading>

        <DrinkRegion aria-labelledby="drink-details-title" aria-live="polite">
          {Array.isArray(drinkList) && drinkList.length > 0 ? (
            <DrinkList>
              {drinkList.map((drink) => (
                <DrinkItem key={drink._id}>
                  <Icon src={categoryIcons[drink.category]} alt={`${drink.category} drink icon`} />
                  <DrinkText>
                    {drink.category} - {drink.name} ({drink.size}) - {drink.caffeineContent} mg
                  </DrinkText>
                  <Button onClick={() => handleDeleteClick(drink._id)}>Remove</Button>
                </DrinkItem>
              ))}
            </DrinkList>
          ) : (
            <p>No drinks added yet.</p>
          )}
        </DrinkRegion>
      </Container>

      <Modal 
        isOpen={isModalOpen} 
        onConfirm={handleModalConfirm} 
        onCancel={handleModalCancel} 
        message="Are you sure you want to delete this drink?" 
      />
    </main>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const HeadingTitle = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  background-color: #47261f;
  padding: 0.6rem 1.4rem;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  transform: rotate(2deg);
`;

const DrinkRegion = styled.section`
  width: 100%;
  text-align: center;
`;

const DrinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DrinkItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: #fdfdfd;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.8rem;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const DrinkText = styled.span`
  flex: 1;
  text-align: left;
`;

export default Detail;