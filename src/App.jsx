// react
import { useState, useEffect } from "react";

// component
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Warning from "./components/Warning/Warning";

function App() {
  // declare the states
  const [cards, setCards] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [sameCourseError, setSameCourseError] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  // declare Select button click handler
  const handleClickSelect = (courseToAdd) => {
    setSameCourseError(false);

    // check if the course is already on the list
    const foundCourse = selectedCourses.find(
      (course) => course.id === courseToAdd.id
    );

    // if the course is already on the list then set the same course error to true and set the warning message state accordingly
    if (foundCourse !== undefined) {
      setSameCourseError(true);
      setWarningMessage(`${courseToAdd.courseName} already added.`);
      return;
    }

    // if the same course is not on the list then add the course to the list and update state accordingly
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

  //  create a timer for the same course error warning message to fade away after a certain period of time
  useEffect(() => {
    let sameCourseErrorTimer;
    if (sameCourseError === true) {
      sameCourseErrorTimer = setTimeout(() => {
        setSameCourseError(false);
        clearTimeout(sameCourseErrorTimer);
        sameCourseErrorTimer = null;
      }, 2500);
    }

    return () => {
      clearTimeout(sameCourseErrorTimer);
      sameCourseErrorTimer = null;
    };
  }, [sameCourseError]);

  // return jsx
  return (
    <div className="pt-[3.125rem] pb-[6.25rem] max-w-[90rem] mx-auto text-textPrimary">
      <Header headingText="Course Registration" />
      <Warning show={sameCourseError} message={warningMessage}></Warning>
      <main className="grid grid-cols-[3fr_1fr] gap-6">
        <Cards handleClickSelect={handleClickSelect} cardsInfo={cards}></Cards>
      </main>
    </div>
  );
}

export default App;
