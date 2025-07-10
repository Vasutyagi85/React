/* <div id="parent">
    <div id="child">
        <h1>Im h1</h1>
        <h2>Im h1</h2> h1 and h2 are siblings we can do it by making an array
    </div>
</div> */
//CREATING ABOVE USING REACT



const parent =React.createElement("div",{id:"parent"},[React.createElement(
    "div",
    {id:"child1"},
    [React.createElement("h1",{},"Im an h1 tag"),
    React.createElement("h1",{},"Im an h1 tag")]
),
React.createElement(
    "div",
    {id:"child2"},
    [React.createElement("h1",{},"Im an h1 tag"),
    React.createElement("h1",{},"Im an h1 tag")])
]);
//reacteleement is a object

// const heading=React.createElement("h1",{id:"heading"},"Hello world from React!");//it is an react element thats why it is object
// first argument is what element we have to create 
// second argument is Object where we give attribute to the eleemnt like id etc
// third argument is what we have to write in that element

const root=ReactDOM.createRoot(document.getElementById("root"));
// we have created a root where dom manipulation and all works here and everything we will render inside this which is div we created named as root above

console.log(parent);

root.render(parent);