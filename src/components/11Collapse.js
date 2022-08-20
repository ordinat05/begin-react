import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };

    // console.log(this);

    // this.showMore = () => {
    //   this.setState({ showContent: false });
    //   console.log(this);
    // };
    // 🔻 1. Yöntem START
    // this.showMore = this.showMore.bind(this);
    // 🔻 1. Yöntem END
  }
  // 🔻 1. Yöntem START
  //   showMore() {
  //     this.setState({ showContent: true });
  //     // console.log(this);
  //   }
  // 🔻 1. Yöntem END
  // 🔻 2. Yöntem START
  //   showMore = () => {
  //     // console.log(this);
  //     // this.setState({ showContent: true });
  //     this.setState({ showContent: !this.state.showContent });
  //   };
  // 🔻 2. Yöntem END
  // 🔻 3. Yöntem START

  showMore = () => {
    // console.log(this);
    // this.setState({ showContent: true });
    // this.setState({ showContent: !this.state.showContent });
    // console.log(this.showContent);
    this.state = {
      showContent: true,
    };
  };
  // 🔻 3. Yöntem END
  render() {
    // console.log(this);
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
