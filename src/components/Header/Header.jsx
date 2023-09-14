import PropTypes from "prop-types";

function Header({ headingText }) {
  return (
    <header>
      <h1 className="text-[2rem] font-bold text-textPrimary text-center leading-[normal]">
        {headingText}
      </h1>
    </header>
  );
}

Header.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default Header;
