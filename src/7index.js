import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/7Card";

// function App() {
//   return <h1>Benim Adım Arin</h1>;
// }

// 🟪🟪🟪 ders 5
// class App extends React.Component {
//   render() {
//     return <h1>Benim Adım Arin</h1>;
//   }
// }

// ReactDOM.render(
// <App />,
// document.getElementById("root")
// );

// 🟪🟪🟪 ders 6
// const names = ["Arin", "Elis", "Gamze"];
// function App() {
//   const buttonValue = "Benim Buton";
//   const str1 = "Click ";
//   const str2 = "Me ";

//   return (
//     <div>
//       {names.map((name) => (
//         <h1>{name}</h1>
//       ))}
//       <h2>Gürcan</h2>
//       <button type="button">
//         JSX BUTTON {buttonValue} {str1.concat(str2)}
//       </button>
//       <button
//         type="button"
//         className="jsxCLASS"
//         tabIndex="2"
//         style={{
//           padding: "10px",
//           color: "white",
//           backgroundColor: "blue",
//           border: "2px solid yellow",
//         }}
//       >
//         JSX BUTTON2
//       </button>
//     </div>
//    // names.map(name =>(console.log(name)));
//   );
// }

// 🟪🟪🟪 ders 7

const App = () => {
  return (
    <div>
      {/* <React.StrictMode> */}
      <div className="card-group">
        <Card
          cardTitle="Card Title1"
          cardText="Lorem Ipsum Text1"
          updatedTime="Last Updated 1 min ago"
          cardImage="https://picsum.photos/id/1/200/300"
        />

        <Card
          cardTitle="Card Title2"
          cardText="Lorem Ipsum Text1"
          updatedTime="Last Updated 2 min ago"
          cardImage="https://picsum.photos/id/10/200/300"
        />
        <Card
          cardTitle="Card Title1"
          cardText="Lorem Ipsum Text3"
          updatedTime="Last Updated 3 min ago"
          cardImage="https://picsum.photos/id/100/200/300"
        />
      </div>
      {/* </React.StrictMode> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
