import React from "react";
import ReactDOM from "react-dom/client";

/* Episode 1
 const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello Naveen! from React."
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    heading,
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// This above is example of using react without JSX
*/

//JSX in html like syntax
const Title = function () {
  return (
    <h1 id="head" className="head" tabIndex="1">
      Namaste React using JSX
    </h1>
  );
};

const number = 10000;

const title = <h1 className="title">Namaste Reast</h1>;

// we can omit return and {}
//Capital case to start a React component name
const JsxHeadingComponent = () => {
  return (
    <div id="container">
      <h2>{number}</h2>
      <Title />
      {Title()}
      {title}
      <h1 id="heading" className="heading" tabIndex="1">
        Namaste React in Functional Component
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeadingComponent />);
