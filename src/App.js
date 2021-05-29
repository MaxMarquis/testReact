import "./App.css";
// import Title from "./Title";
// import Panier from "./components/panier/Panier"
// import Categories from "./components/categories/Categorie"
// import Photo from "./components/photo/Photo"
import MenuList from "./components/menulist/MenuList"

// const comments = [
//   {
//     id: 1,
//     date: new Date(),
//     text: "I hope you enjoy learning React!",
//     user: {
//       name: "Alice",
//       avatarUrl: "https://via.placeholder.com/75/000000/FFFFFF/?text=Profil",
//     },
//   },
//   {
//     id: 2,
//     date: new Date(),
//     text: "Thanks I like React!",
//     user: {
//       name: "Bob",
//       avatarUrl: "https://via.placeholder.com/75/000000/FFFFFF/?text=Profil",
//     },
//   },
//   {
//     id: 3,
//     date: new Date(),
//     text: "Lot's to learn with it!",
//     user: {
//       name: "Jack",
//       avatarUrl: "https://via.placeholder.com/75/000000/FFFFFF/?text=Profil",
//     },
//   },
// ];

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Claire" },
//   { id: 4, name: "David" },
// ];

// const articles = [
//   { id: 1, name: "Souris" },
//   { id: 2, name: "Clavier" },
//   { id: 3, name: "Ecran" },
//   { id: 4, name: "Webcam" },
// ];

// const categories = [
//   {id:1, name: "informatique"},
//   {id:2, name: "livre"},
//   {id:3, name: "reparation"},
// ];

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

// function App() {
//     return (
//         <div className="App">
//           <Title name="Maxim" />
//           <div>
//             {users.map(({id, name}) => (
//               <div key={id}>{name}</div>
//             ))}
//           </div>
//           <br />
//           <div>
//             <Panier articles={articles}/> <br />
//             <Photo src="https://via.placeholder.com/75" width="200">
//               <input type="text" />
//             </Photo>
//             <Categories categories={categories}/>
//           </div>
//         </div>
//     );
// }

export default App;
