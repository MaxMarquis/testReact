import "./App.css";
import React from 'react'
import MenuList from "./components/menulist/MenuList"

const foodItems = [
  {
    id:1,
    name: "Food 1",
    description: "My food desc 1",
    price: 5,
    img: "https://via.placeholder.com/75",
    isFavorite: false
  },
  {
    id:2,
    name: "Food 2",
    description: "My food desc 2",
    price: 5,
    img: "https://via.placeholder.com/75",
    isFavorite: false
  },
  {
    id:3,
    name: "Food 3",
    description: "My food desc 3",
    price: 5,
    img: "https://via.placeholder.com/75",
    isFavorite: false
  },
  {
    id:4,
    name: "Food 4",
    description: "My food desc 4",
    price: 5,
    img: "https://via.placeholder.com/75",
    isFavorite: false
  }
]

function App() {
  return(
    <div>
      <h1 id="title">Mon restaurant</h1>
      <MenuList menuItem = {foodItems}/>
    </div>
  );
}

export default App;