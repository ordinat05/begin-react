import React from "react";

class Collapse extends React.Component {
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
          Link with href
        </button>
        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
