import React from "react";
import PropTypes from "prop-types";

// 🟪 ders 9  ⏰ 16:40 yeniden oluşturmak

class Card extends React.Component {
  static defaultProps = {
    cardTitle: "✅ Default  Card Title",
  };

  render() {
    return (
      <div className="card  w-100">
        <img src={this.props.cardImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}

// Card.defaultProps = {
//   cardTitle: "✅ Default  Card Title",
// };

Card.propTypes = {
  // cardText: PropTypes.array,
  // cardText: PropTypes.number,
  cardText: PropTypes.string,
  // cardText: PropTypes.array.isRequired,
  // cardText: PropTypes.number.isRequired,
  // cardText: PropTypes.string.isRequired,
};

export default Card;
