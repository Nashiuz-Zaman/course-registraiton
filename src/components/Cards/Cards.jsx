// react
import PropTypes from "prop-types";

// components
import Card from "../Card/Card";

function Cards({ cardsInfo }) {
  return (
    <ul className="grid grid-cols-3 gap-6">
      {cardsInfo.map((card) => (
        <Card key={card.id} cardInfo={card}></Card>
      ))}
    </ul>
  );
}

Cards.propTypes = {
  cardsInfo: PropTypes.array.isRequired,
};

export default Cards;
