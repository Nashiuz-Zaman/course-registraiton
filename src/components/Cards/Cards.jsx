// react
import PropTypes from "prop-types";

// components
import Card from "../Card/Card";

function Cards({ cards }) {
  return (
    <div>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} cardInfo={card}></Card>
        ))}
      </ul>
    </div>
  );
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Cards;
