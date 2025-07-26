
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"



const AppLayout=()=>{
  return (
  <div className="app">
    <Header/>
    <Body/>
  </div>)
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);





































































































// /* <div id="parent">
//     <div id="child">
//         <h1>Im h1</h1>
//         <h2>Im h1</h2> h1 and h2 are siblings we can do it by making an array
//     </div>
// </div> */
// //CREATING ABOVE USING REACT

// // const parent = React.createElement("div", { id: "parent" }, [
// //   React.createElement("div", { id: "child1", key: "child-1" }, [
// //     React.createElement("h1", { key: "child-1-h1" }, "I'm an h1 tag"),
// //     React.createElement("h2", { key: "child-1-h2" }, "I'm an h2 tag")
// //   ]),
// //   React.createElement("div", { id: "child2", key: "child-2" }, [
// //     React.createElement("h1", { key: "child-2-h1" }, "I'm another h1 tag"),
// //     React.createElement("h2", { key: "child-2-h2" }, "I'm another h2 tag")
// //   ])
// // ]);
// // //reacteleement is a object

// // // const heading=React.createElement("h1",{id:"heading"},"Hello world from React!");//it is an react element thats why it is object
// // // first argument is what element we have to create 
// // // second argument is Object where we give attribute to the eleemnt like id etc
// // // third argument is what we have to write in that element

// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // // we have created a root where dom manipulation and all works here and everything we will render inside this which is div we created named as root above


// // root.render(parent);


// //React element

// const heading = React.createElement("h1",{id:"heading"},"hello react");

// const jsheading=(
// <h1 className="head">
//   React using jsx
//   </h1>);//it is also an object as above
// //babel transform jsx into react element
// //for multiline jsx we are using round bracket

// //REACT COMPONENT 
// //REACT FUNCTIONAL COMPONENT (normal js fucntion which returns jsx/react element) jsx is a react elemt 
// //first letter should be capital so that react can diffrentiate between 


// const Title=()=>(//we have an react element named as Title
//   <h1 className="head">
//     React using JSX
//   </h1>
// );
// const number=1000;
// //component composition component under component
// const HeadingComponent=()=>(
//   <div id="container">
//     <h2>{number}</h2> {/* javascript under {} these curly jsx santizes the data*/}
//     {/* {Title()}  inside we can call the function as in these curly braces we can run js so obviously 
//     we can call function because component is normal function*/}
//     {/* <Title/> or <Title> </Title>*/}
//     {/* {Title} react element inside component */}
//   <h1>React Functional Component</h1>
//   </div>
// );
// //{} can be replaced by() and we can remove the return 




// const root=ReactDOM.createRoot(document.getElementById("root"));


// root.render(jsheading);
// root.render(<HeadingComponent/>);//syntax for rendering the component