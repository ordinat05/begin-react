import React from "react";
import ReactDOM from "react-dom";

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
      <div className="card-group">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
