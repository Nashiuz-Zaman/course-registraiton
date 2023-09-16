// react
import PropTypes from "prop-types";

// icon
import warningIcon from "./../../assets/icons/warning-icon.svg";

function Warning({ show, message, handleClickClose }) {
  return (
    <div
      className={`fixed bottom-10 right-10 bg-danger rounded-default text-white px-3 py-5 z-20 invisible opacity-0 transition-all duration-300 ${
        show ? "!visible !opacity-100" : ""
      } `}
    >
      <div className="flex items-center gap-1 mb-3">
        <img className="filter-white" src={warningIcon} alt="warning sign" />
        <p className="font-medium">{message}</p>
      </div>
      <button
        onClick={handleClickClose}
        className="text-white border border-white rounded-default px-3 py-1 block w-max mx-auto"
      >
        Close
      </button>
    </div>
  );
}

Warning.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleClickClose: PropTypes.func.isRequired,
};

export default Warning;
