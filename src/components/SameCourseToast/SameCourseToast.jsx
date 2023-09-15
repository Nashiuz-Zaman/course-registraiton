// react
import PropTypes from "prop-types";

// icon
import warningIcon from "./../../assets/icons/warning-icon.svg";

function SameCourseToast({ showToast }) {
  return (
    <div
      className={`fixed top-10 left-1/2 -translate-x-1/2 flex items-center border bg-white border-[#ddd] rounded-default px-5 py-3 gap-3 z-20 invisible opacity-0 transition-all duration-300 ${
        showToast ? "!visible !opacity-100" : ""
      } `}
    >
      <img src={warningIcon} alt="warning sign" />
      <p className="font-medium">
        Sorry, you cannot add the same course more than once!
      </p>
    </div>
  );
}

SameCourseToast.propTypes = {
  showToast: PropTypes.bool.isRequired,
};

export default SameCourseToast;
