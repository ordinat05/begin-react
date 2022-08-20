import React from "react";

class Collapse extends React.Component {
  // state = { showContent: false };

  constructor() {
    super();
    this.state = {
      showContent: false,
    };

    // 🔻 1. Yöntem START
    // 🔻 1. Yöntem END
    this.showMore = this.showMore.bind(this);
  }
  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  // componentDidMount() {
  //   console.log("Component Oluşturuldu");
  // }
  // componentDidUpdate() {
  //   console.log("Component Güncellendi");
  // }
  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {console.log(this.props.children.props.cardTitle)} */}
          {/* 🔺 1. Yöntem - Consola yazdırarak bulmak.*/}
          {/* {this.props.children.props.cardTitle} */}
          {/* 🔺 2. Yöntem - Bulunanı JS syntax ı ile butona yazdırmak.*/}
          {/* {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )} */}
          {/* 🔺 3. Yöntem - React.js syntax ı ile butona yazdırmak.*/}
          {/* {React.Children.map(
            this.props.children,
            (children) => children.props[2]
          )} */}
          {/* 🔺 3. Yöntem - React.js syntax ı ile butona yazdırmak.*/}
          {/* DENE 🔑🔑🔑 Prop adını nasıl alabilirim ? cardText, updatedTime, cardImage, cardTitle  bunlardan birisinin adını… */}
        </button>
        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
