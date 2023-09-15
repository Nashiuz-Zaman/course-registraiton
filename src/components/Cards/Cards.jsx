// react
import PropTypes from "prop-types";

// components
import Card from "../Card/Card";

function Cards({ cardsInfo, handleClickSelect }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cardsInfo.map((card) => (
        <Card
          key={card.id}
          handleClickSelect={handleClickSelect}
          cardInfo={card}
        ></Card>
      ))}
    </div>
  );
}

Cards.propTypes = {
  cardsInfo: PropTypes.array.isRequired,
  handleClickSelect: PropTypes.func.isRequired,
};

export default Cards;
