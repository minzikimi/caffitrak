import React, { useState } from 'react'
import caffeineDatabase from '../../../../server/db'

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState("");
   
    const handleCategoryChange = (event) =>{
        setSelectedCategory(event.target.value);
    }
    const handleDrinkChange = (event) => {
        setSelectedDrink(event.target.value);
      };

    const selectedCategoryData = caffeineDatabase.find((item)=>item.category===selectedCategory)

  return (
    <div>
      <h1>Caffeine Pulse</h1>

      <form>
        <label htmlFor='category'>Category</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
            <option>Choose</option>
            {caffeineDatabase.map((item)=>(<option key={item.category} value={item.category}>{item.category}</option>))}
        </select>

        {selectedCategory && (
            <>
                <label htmlFor='drink'>Drink</label>
                <select>
                    <option>Choose </option>
                    {selectedCategoryData.drinks.map((drink)=>(
                        <option key={drink.name} value={drink.name}>
                            {drink.name}
                        </option>
                    ))}
                </select>
            </>
        )}
      </form>
    </div>
  )
}

export default Home
