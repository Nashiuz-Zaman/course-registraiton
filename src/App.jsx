// react
import { useState, useEffect } from "react";

// component
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import SameCourseToast from "./components/SameCourseToast/SameCourseToast";

function App() {
  // declare the states
  const [cards, setCards] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [sameCourse, setSameCourse] = useState(false);

  // declare Select button click handler
  const handleClickSelect = (courseToAdd) => {
    setSameCourse(false);

    const foundCourse = selectedCourses.find((course) => {
      return course.id === courseToAdd.id;
    });

    if (foundCourse !== undefined) {
      setSameCourse(true);

      let sameCourseToastTimer = setTimeout(() => {
        setSameCourse(false);
        clearTimeout(sameCourseToastTimer);
        sameCourseToastTimer = null;
      }, 2000);
    }

    if (!foundCourse) {
      const newSelectedCourses = [...selectedCourses, courseToAdd];
      setSelectedCourses(newSelectedCourses);
    }
  };

  //  loading the cards data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="pt-[3.125rem] pb-[6.25rem] max-w-[90rem] mx-auto text-textPrimary">
      <Header headingText="Course Registration" />
      <SameCourseToast showToast={sameCourse}></SameCourseToast>
      <main className="grid grid-cols-[3fr_1fr] gap-6">
        <Cards handleClickSelect={handleClickSelect} cardsInfo={cards}></Cards>
      </main>
    </div>
  );
}

export default App;
