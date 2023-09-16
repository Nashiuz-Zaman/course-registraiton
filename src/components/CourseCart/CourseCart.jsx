import PropTypes from "prop-types";

function CourseCart({ selectedCourses, totalCreditHrs, totalCost }) {
  //  calculate remainig hrs
  const remainingCreditHrs = 20 - totalCreditHrs;

  // common styles for ordered course list jsx
  const courseListStyles = "text-textLight leading-[1.875rem]";

  return (
    <div className="p-6">
      {/* remaining credit hours */}
      <p className="text-primary text-lg font-bold leading-[1.875rem] pb-4 mb-4 border-b border-lightBorder">
        Credit Hour Remaining {remainingCreditHrs} hr
      </p>

      {/* course list title */}
      <h3 className="text-xl leading-[normal] font-bold mb-[1.3125rem]">
        Course Name
      </h3>

      {/* course list list items (ordered list) */}
      <ol className="pb-6 mb-4 border-b border-lightBorder">
        {/* if array empty then show this template */}
        {selectedCourses.length === 0 && (
          <li className={courseListStyles}>No Course Selected</li>
        )}

        {/* if array has elements then show this template */}
        {selectedCourses.length > 0 &&
          selectedCourses.map((course, i) => (
            <li key={course.id} className={courseListStyles}>
              {i + 1} {course.courseName}
            </li>
          ))}
      </ol>

      {/* total credit hrs */}
      <p className="text-textMediumLight pb-4 border-b mb-4 border-lightBorder font-medium">
        Total Credit Hour : {totalCreditHrs}
      </p>

      {/* total price */}
      <p className="text-textMediumLight font-semibold">
        Total Price : {totalCost} USD
      </p>
    </div>
  );
}

CourseCart.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalCreditHrs: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default CourseCart;
