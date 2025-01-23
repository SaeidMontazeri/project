import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Gay from "./components/Gay";
import saeid from "./saeid.jpg";
import sadeq from "./sadeq.jpg";
import soheil from "./soheil.jpg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [width, setWidth] = useState(27);
  const [height, setHeight] = useState(300);
  const cars = [
    {
      name: "Audi",
      price: 68,
      src: "https://platform.cstatic-images.com/large/in/v2/26614b17-8a14-51ca-a177-286e9977310e/7d766581-2af6-40c4-a226-3de07adfcc64/ooGGqfpvMRu5JUJTCl2Vd-Re-b4.jpg",
    },
    {
      name: "Ford",
      price: 33,
      src: "https://platform.cstatic-images.com/large/in/v2/f6403c94-4a83-57ef-820e-1e2ecd10d807/dd531449-3cb7-47a6-b4a2-e34f43c2590f/9GBXJWbBtWR1VLq5vXxBlCI1x4A.jpg",
    },
    {
      name: "Tesla",
      price: 50,
      src: "https://platform.cstatic-images.com/large/in/v2/7076ebed-5ff7-5143-a0ca-032abc87b1cc/15c959d0-e872-4977-b3b2-51c11f1e9138/niZexgKr1KDPawkJQQ75bFTgBLo.jpg",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: darkMode ? "Black" : "white",
        height: "100vh",
      }}
    >
      <div className="row">
        {cars.map((car) => (
          <Card name={car.name} price={car.price} src={car.src} />
        ))}
      </div>
      <Form darkMode={darkMode} setDarkMode={setDarkMode} />
      <Gay/>
    </div>
  );
}

export default App;
