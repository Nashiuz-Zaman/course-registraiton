import PropTypes from "prop-types";

function Card({ cardInfo }) {
  const { courseName, imgSrc, description, credit, price } = cardInfo;

  return <div></div>;
}

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
};

export default Card;
