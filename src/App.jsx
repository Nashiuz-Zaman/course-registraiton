// react
import { useState, useEffect } from "react";

// component
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";

function App() {
  // declare the states
  const [cards, setCards] = useState([]);

  //  loading the cards data
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="px-[3.75rem] pt-[3.125rem] pb-[6.25rem] text-textPrimary">
      <Header headingText="Course Registration" />
      <main className="grid grid-cols-[3fr_1fr] gap-6">
        <Cards cardsInfo={cards}></Cards>
      </main>
    </div>
  );
}

export default App;
