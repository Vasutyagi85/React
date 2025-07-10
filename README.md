# ⚛️ React DOM Manipulation Exercise

## 📘 Description

This project demonstrates how to manually create and render DOM elements using **React.createElement** — without JSX or any external build tools. It's a pure, foundational React setup designed for learning how the React rendering process works under the hood.

## 🚀 What I Learned

- How `React.createElement()` works behind the scenes
- Understanding the arguments:
  - 📦 Element type (e.g. `"div"`, `"h1"`)
  - 🎯 Props/attributes like `id`
  - 🧩 Children (can be strings, elements, or arrays)
- How React elements are plain JavaScript objects before rendering
- Rendering React trees using `ReactDOM.createRoot().render()`
- How sibling elements (like multiple `<h1>`) can be rendered using arrays
- Deepened understanding of virtual DOM and JSX alternatives

## 💡 Code Overview

```js
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child1" },
//       [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h1", {}, "I'm another h1 tag")
//       ]
//     ),
//     React.createElement(
//       "div",
//       { id: "child2" },
//       [
//         React.createElement("h1", {}, "I'm also an h1 tag"),
//         React.createElement("h1", {}, "Still another h1 tag")
//       ]
//     )
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
