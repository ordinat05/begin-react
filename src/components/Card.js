import React from "react";
// import ReactDOM from 'react-dom';

const Card = (props) => {
  console.log(props);
  return (
    <div className="card  w-100">
      <img src={props.cardImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <p className="card-text">
          <small className="text-muted">{props.updatedTime}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
