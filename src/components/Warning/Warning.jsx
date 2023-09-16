// react
import PropTypes from "prop-types";

// icon
import warningIcon from "./../../assets/icons/warning-icon.svg";

function Warning({ show, message }) {
  return (
    <div
      className={`fixed top-10 left-1/2 -translate-x-1/2 flex items-center border bg-yellow-500 rounded-default px-3 py-5 gap-1 z-20 invisible opacity-0 transition-all duration-300 ${
        show ? "!visible !opacity-100" : ""
      } `}
    >
      <img src={warningIcon} alt="warning sign" />
      <p className="font-medium">{message}</p>
    </div>
  );
}

Warning.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Warning;
