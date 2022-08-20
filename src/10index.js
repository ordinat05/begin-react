import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Collapse from "./components/12Collapsese";

// 🟪🟪🟪 ders 10

const App = () => {
  return (
    <div>
      {/* <React.StrictMode> */}
      <div className="container text-center">
        <div className="row">
          <div className="card-group">
            <div className="col">
              <Collapse href="collapseExample1">
                <Card
                  // cardTitle="Card Title1"
                  cardText="Lorem Ipsum Text1"
                  updatedTime="Last Updated 1 min ago"
                  cardImage="https://picsum.photos/id/1/200/300"
                />
              </Collapse>
            </div>

            <div className="col">
              <Collapse href="collapseExample2">
                <Card
                  cardTitle="Card Title2"
                  cardText="Lorem Ipsum Text2"
                  updatedTime="Last Updated 2 min ago"
                  cardImage="https://picsum.photos/id/2/200/300"
                />
              </Collapse>
            </div>

            <div className="col">
              <Collapse href="collapseExample3">
                <Card
                  // cardTitle="Card Title3"
                  cardText="Lorem Ipsum Text3"
                  updatedTime="Last Updated 3 min ago"
                  cardImage="https://picsum.photos/id/3/200/300"
                />
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      {/* </React.StrictMode> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
