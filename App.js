const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World! from React."
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
