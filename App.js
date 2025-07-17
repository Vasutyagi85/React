/* <div id="parent">
    <div id="child">
        <h1>Im h1</h1>
        <h2>Im h1</h2> h1 and h2 are siblings we can do it by making an array
    </div>
</div> */
//CREATING ABOVE USING REACT

import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child-1" }, [
    React.createElement("h1", { key: "child-1-h1" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "child-1-h2" }, "I'm an h2 tag")
  ]),
  React.createElement("div", { id: "child2", key: "child-2" }, [
    React.createElement("h1", { key: "child-2-h1" }, "I'm another h1 tag"),
    React.createElement("h2", { key: "child-2-h2" }, "I'm another h2 tag")
  ])
]);
//reacteleement is a object

// const heading=React.createElement("h1",{id:"heading"},"Hello world from React!");//it is an react element thats why it is object
// first argument is what element we have to create 
// second argument is Object where we give attribute to the eleemnt like id etc
// third argument is what we have to write in that element

const root=ReactDOM.createRoot(document.getElementById("root"));
// we have created a root where dom manipulation and all works here and everything we will render inside this which is div we created named as root above


root.render(parent);