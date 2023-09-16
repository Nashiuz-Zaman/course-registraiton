// react
import PropTypes from "prop-types";

// icon
import dollarIcon from "./../../assets/icons/dollar-icon.svg";
import creditIcon from "./../../assets/icons/credit-icon.svg";

function Card({ cardInfo, handleClickSelect }) {
  const { courseName, imgSrc, description, credit, price } = cardInfo;

  return (
    <div className="p-4 leading-[normal] flex flex-col">
      {/* course cover */}
      <div className="w-full mb-4">
        <img
          className="block w-full"
          src={imgSrc}
          alt={`Cover of ${courseName}`}
        />
      </div>

      {/* course title */}
      <h3 className="font-semibold text-[1.2rem] mb-3">{courseName}</h3>

      {/* course description */}
      <p className="text-textLight text-sm leading-[1.5rem] font-medium mb-4">
        {description}
      </p>

      {/* course additional info and select button */}
      <div className="mt-auto">
        {/* price and credit box */}
        <div className="flex items-center gap-[14px] mb-6">
          {/* price goes here */}
          <div className="flex items-center gap-3">
            <img className="block h-6" src={dollarIcon} alt="dollar sign" />
            <p className="text-textLight font-medium"> Price : {price}</p>
          </div>

          {/* credit goes here */}
          <div className="flex items-center gap-3">
            <img className="block h-6" src={creditIcon} alt="credit icon" />
            <p className="text-textLight font-medium">
              {" "}
              Credit : {`${credit}hr`}
            </p>
          </div>
        </div>

        {/* select button */}
        <button
          className="block w-full text-[1.2rem] bg-primary hover:bg-primaryDark transition-all duration-300 text-white py-[9px] font-semibold rounded-default"
          onClick={() => handleClickSelect(cardInfo)}
        >
          Select
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  handleClickSelect: PropTypes.func.isRequired,
};

export default Card;
