const caffeineDatabase = [
  {
    category: "Coffee",
    drinks: [
      { name: "Espresso", size: { S: 63, M: 126, L: 189 } },
      { name: "Americano", size: { S: 75, M: 150, L: 225 } },
      { name: "Latte", size: { S: 63, M: 126, L: 189 } },
      { name: "Cappuccino", size: { S: 63, M: 126, L: 189 } },
      { name: "Cold Brew", size: { S: 155, M: 238, L: 310 } }
    ]
  },
  {
    category: "Tea",
    drinks: [
      { name: "Green Tea", size: { S: 12, M: 24, L: 36 } },
      { name: "Black Tea", size: { S: 14, M: 28, L: 42 } },
      { name: "Earl Grey", size: { S: 14, M: 28, L: 42 } },
      { name: "Oolong Tea", size: { S: 25, M: 50, L: 75 } },
      { name: "Chai Tea", size: { S: 25, M: 50, L: 75 } }
    ]
  },
  {
    category: "Energy Drink",
    drinks: [
      { name: "Red Bull", size: { half: 40, full: 80 } },
      { name: "Monster", size: { half: 70, full: 140 } },
      { name: "Celsius", size: { half: 100, full: 200 } },
      { name: "NOCCO", size: { half: 90, full: 180 } }
    ]
  },
  {
    category: "Carbonated Drink",
    drinks: [
      { name: "Coca-Cola", size: { S: 24, M: 34, L: 46 } },
      { name: "Pepsi", size: { S: 25, M: 38, L: 50 } }
    ]
  }
];

export default caffeineDatabase;
