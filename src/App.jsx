// react
import { useState, useEffect } from "react";

// component
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import CourseCart from "./components/CourseCart/CourseCart";
import Warning from "./components/Warning/Warning";

function App() {
  // declare the states
  const [cards, setCards] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [error, setError] = useState(false);
  const [totalCreditHrs, setTotalCreditHrs] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [warningMessage, setWarningMessage] = useState("");

  // declare the toast close button handler
  const handleClickClose = () => {
    setError(false);
  };

  // declare Select button click handler
  const handleClickSelect = (courseToAdd) => {
    setError(false);

    // check if the course is already on the list
    const foundCourse = selectedCourses.find(
      (course) => course.id === courseToAdd.id
    );

    // if
    if (foundCourse !== undefined && totalCreditHrs + courseToAdd.credit > 20) {
      setWarningMessage(
        `${courseToAdd.courseName} already added. Also total credit hours cannot exceed 20.`
      );
      setError(true);
      return;
    }

    // if the course is already on the list then set the error to true and set the warning message state accordingly
    if (foundCourse !== undefined) {
      setWarningMessage(`${courseToAdd.courseName} already added`);
      setError(true);
      return;
    }

    // if the credit hours are supposed to be more than 20 hours then show the warning message accordingly and show error warning
    if (totalCreditHrs + courseToAdd.credit > 20) {
      setWarningMessage(`Total credit hours cannot exceed 20`);
      setError(true);
      return;
    }

    // if the same course is not on the list then add the course to the list and update state accordingly
    if (!foundCourse) {
      const newSelectedCourses = [...selectedCourses, courseToAdd];
      setSelectedCourses(newSelectedCourses);
      // find total cost of the courses in the list
      const totalCost = newSelectedCourses.reduce(
        (acc, course) => acc + course.price,
        0
      );
      setTotalCost(totalCost);

      // find total credit hrs of the courses in the list
      const totalCreditHrs = newSelectedCourses.reduce(
        (acc, course) => acc + course.credit,
        0
      );
      setTotalCreditHrs(totalCreditHrs);
    }
  };

  //  loading the cards data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  // return jsx
  return (
    <div className="pt-[3.125rem] pb-[6.25rem] max-w-[90rem] mx-auto text-textPrimary">
      <Header headingText="Course Registration" />
      <Warning
        show={error}
        handleClickClose={handleClickClose}
        message={warningMessage}
      ></Warning>
      <main className="grid grid-cols-[3fr_1fr] gap-6">
        <section>
          <Cards
            handleClickSelect={handleClickSelect}
            cardsInfo={cards}
          ></Cards>
        </section>

        <section>
          <CourseCart
            totalCost={totalCost}
            totalCreditHrs={totalCreditHrs}
            selectedCourses={selectedCourses}
          ></CourseCart>
        </section>
      </main>
    </div>
  );
}

export default App;
