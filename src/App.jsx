// react
import { useState, useEffect } from "react";

// component
import Header from "./components/Header/Header";

function App() {
  const [cards, setCards] = useState([]);

  //  loading the cards data
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  console.log(cards);

  return (
    <div className="px-[3.75rem] pt-[3.125rem] pb-[6.25rem]">
      <Header headingText="Course Registration" />
      <main className="grid grid-cols-[3fr_1fr]"></main>
    </div>
  );
}

export default App;
