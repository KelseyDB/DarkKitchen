//TODO: Create a list of dishes that people will order online.
//TODO: responsive
//TODO: list the food using card templates
//TODO: categorize your food to filter it (ex: vegan, comfort food)
//TODO: create a shopping cart component to display the selected dishes and display the total amount of the delivery
//TODO: Create darkmode switch.

const dishes = [
  {
    dishName: "Jawbreaker",
    franchise: "Ed, Edd n Eddy",
    type: ["candy", "snacks","veggie", "vegan"],
    ingredients:["sugar"],
    price: 5.00,
    picture:'./img/Jawbreakers.jpg',
  },
  {
    dishName: "Kronk's Spinach Puffs",
    franchise: "The Emperor's New Groove",
    type: ["comfort food", "pastry", "party food"],
    ingredients:["Spinach ","Olive Oil ","Garlic ","Bacon ", "Cream Cheese ", "Egg ","Puff pastry "],
    price: 12.99,
    picture: './img/spinachPuffs.jpg',
    secondPicture: './img/kronksPuffs.jpg',
  },
  {
    dishName: "Cookie Cat",
    franchise:"Steven Universe",
    type: ["snacks", "ice cream", "comfort food", "veggie"],
    ingredients:["flour", "cocoa powder","butter","sugar","milk"],
    price: 6.59 ,
    picture:".img/cookieCat.jpg" ,
  },
  {
    dishName: "Kelpshake",
    franchise: "Spongebob",
    type:["drink", "toxic", "vegan"],
    ingredients:["kelp juice ", "radio active materials"],
    price: 2.00,
    picture: "./img/kelpshake.webp",
  },
  {
    dishName: "Jake's Most Delicious Sandwich",
    franchise: "Adventure Time",
    type: ["lunch", "snack"],
    ingredients:["cream cheese", "pickles", "dill", "egg", "bird (from the window)", "cucumber", "tomato", "yellow onions","tears(salt)", "bacon", "lobsters soul"],
    price: 8.1321,
    picture: './img/JakesSandwich.webp',
    secondPicture: './img/jakesandwichreal.jpg'
  },
  {
    dishName: "Nuka-Cola",
    franchise: "Fallout",
    type: ["drink"],
    ingredients:["aspartame", "phosphoric acid", "caffeine"],
    price: 13.50 ,
    picture: "./img/nukacola.jpg",
  },
  {
    dishName: "Lembas Bread",
    franchise:"Lord of The Rings",
    type: ["snack", "pastry", "lunch","veggie"],
    ingredients:["flour","salt","sugar","milk"],
    price: 8.80,
    picture: "./img/lembas.jpg" ,
  },
  {
    dishName: "Krabby Patty",
    franchise:"Spongebob",
    type:["veggie", "snack"],
    ingredients:["pickles", "lettuce", "tomato", "cheese","onion", "secret formula"],
    price: 2.00,
    picture: './img/krabbypatty.webp',
  },
]