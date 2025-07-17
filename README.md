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



📦 Understanding Dependencies in Node.js
🔹 1. Types of Dependencies
Regular dependencies (dependencies)
Installed via npm install <package>
Used in both development and production
Example: express, mongoose

Development dependencies (devDependencies)
Installed via npm install <package> -D
Required only during development (not shipped to production)

Example: parcel, nodemon, eslint

📘 package.json
This file:

Tracks all installed dependencies
Stores metadata about your project
Uses semantic versioning with:

^ → allows future minor updates (e.g. ^1.2.3 → up to 1.x.x)
~ → allows future patch updates (e.g. ~1.2.3 → up to 1.2.x)


🔒 package-lock.json
This file:
Locks the exact versions of all installed packages
Ensures consistent installs across environments
Tracks nested packages (dependencies of dependencies)



📁 node_modules/ and Transitive Dependencies
When you install tools like Parcel, they come with their own dependencies
These are stored inside node_modules/



📦 All other packages required by Parcel are called transitive dependencies
You didn’t install them directly — Parcel did!
Example: chalk, source-map, postcss may be installed automatically



🧠 Summary
File	               Purpose

package.json	       Declares your dependencies & scripts

package-lock.json	   Locks exact versions of all dependencies

node_modules/	       Stores all dependencies and transitive ones


// npx is used to execute a package

# Parcel
-Dev Build
-Local Server
-HMR= Hot Model Replacement
-File Watching Algorithm written in c++
-Caching - Faster builds
-Image Optimisation
-Minification
-Bundling
-Compress
-Diffrential Bundling - support older browser
-Diagnostic
-Error Handling
-Tree Shaking- remove unused code
-Diffrent dev and prod bundles

