import PropTypes from "prop-types";

function Header({ headingText }) {
  return (
    <header className="mb-12">
      <h1 className="text-[2rem] font-bold text-center leading-[normal]">
        {headingText}
      </h1>
    </header>
  );
}

Header.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default Header;
