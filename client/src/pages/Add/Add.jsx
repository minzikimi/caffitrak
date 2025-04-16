import React, { useState } from "react";
import caffeineDatabase from "../../db";
import api from "../../utils/api";
import styled from "styled-components";
import Button from "../../components/Button";

const Add = ({ setDrinkList }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleDrinkChange = (event) => setSelectedDrink(event.target.value);
  const handleSizeChange = (event) => setSelectedSize(event.target.value);

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
    } catch (err) {
      console.error("Error adding drink:", err);
    }
  };

  return (
    <Container>
      <Form aria-labelledby="add-drink-heading"  onSubmit={handleSubmit}>
        <Heading>Hey, what did you drink?</Heading>

        <Label htmlFor="category">Category</Label>
        <Select 
          id="category"
          aria-label="Select category of drink"
          value={selectedCategory}
          onChange={handleCategoryChange}>
          <option value="">Choose</option>
          {caffeineDatabase.map((item) => (
            <option key={item.category} value={item.category}>
              {item.category}
            </option>
          ))}
        </Select>

        {selectedCategory && (
          <>
            <Label htmlFor="drink">Drink</Label>
            <Select 
              id="drink"
              aria-label="Select drink"
              value={selectedDrink} 
              onChange={handleDrinkChange}>
              <option value="">Choose</option>
              {selectedCategoryData?.drinks.map((drink) => (
                <option key={drink.name} value={drink.name}>
                  {drink.name}
                </option>
              ))}
            </Select>
          </>
        )}

        {selectedDrink && selectedDrinkData && (
          <>
            <Label htmlFor="size">Size</Label>
            <Select 
              id="size" 
              aria-label="Select size of drink"
              value={selectedSize} 
              onChange={handleSizeChange}>
              <option value="">Choose</option>
              {Object.keys(selectedDrinkData.size).map((sizeKey) => (
                <option key={sizeKey} value={sizeKey}>
                  {sizeKey} - {selectedDrinkData.size[sizeKey]} mg
                </option>
              ))}
            </Select>
          </>
        )}

        <Button type="submit" disabled={!selectedCategory || !selectedDrink || !selectedSize}>
          Add
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #47261f;
  font-size: 1.2rem;
`;


const Heading = styled.h2`
  color: #47261f;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  align-self: flex-start;
  font-weight: bold;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #aaa;
  background-color: #fff;
  color: #333;

  &:focus {
    outline: 2px solid #ffbf47;
    border-color: #ffbf47;
  }
`;

// const CoffeeGif = styled.img`
//   width: 300px;
//   margin-top: 20px;
// `;

export default Add;