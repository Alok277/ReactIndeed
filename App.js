const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", {id:'child1'}, [
    React.createElement("h1", { id: "child1" }, "This is child1"),
    React.createElement("h1", { id: "child2" }, "This is child2"),
  ]),
  React.createElement("div", {id:'child2'}, [
    React.createElement("h1", { id: "child1" }, "This is child1"),
    React.createElement("h1", { id: "child2" }, "This is child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
