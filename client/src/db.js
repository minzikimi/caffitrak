const caffeineDatabase = [
  {
    category: "Coffee",
    drinks: [
      { name: "Espresso", size: { s: 63, m: 126, l: 189 } },
      { name: "Americano", size: { s: 75, m: 150, l: 225 } },
      { name: "Latte", size: { s: 63, m: 126, l: 189 } },
      { name: "Cappuccino", size: { s: 63, m: 126, l: 189 } },
      { name: "Cold Brew", size: { s: 155, m: 238, l: 310 } }
    ]
  },
  {
    category: "Tea",
    drinks: [
      { name: "Green Tea", size: { s: 12, m: 24, l: 36 } },
      { name: "Black Tea", size: { s: 14, m: 28, l: 42 } },
      { name: "Earl Grey", size: { s: 14, m: 28, l: 42 } },
      { name: "Oolong Tea", size: { s: 25, m: 50, l: 75 } },
      { name: "Chai Tea", size: { s: 25, m: 50, l: 75 } }
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
    category: "Carbonated Drinks",
    drinks: [
      { name: "Coca-Cola", size: { s: 24, m: 34, l: 46 } },
      { name: "Pepsi", size: { s: 25, m: 38, l: 50 } },
    ]
  }
];

export default caffeineDatabase;
