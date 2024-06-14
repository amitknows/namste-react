/***********
 * Suppose you have to create the following structutre in react
 *
 * <div id= 'parent'>
 *      <div id = 'child'>
 *          <h1></h1>
 *      </div>
 * <div id = 'child2'>
 *          <h1></h1>
 *      </div>
 * </div>
 *
 *
 * ReactElement(Object)=> HTML(Browser Understands )
 */
import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello i am h1 big brother of h2"
);

/*-------------------------CORE REACT--------------------------------*/

const div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    heading,
    React.createElement("h2", { id: "h2" }, "child>h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    heading,
    React.createElement("h2", { id: "h2" }, "child2>h2"),
  ]),
]);
/*--------------------------------------------------------------------*/
// Now the upper code looks so messy and doesnot seems to make our life easy so here comes the SAVIUOR   "JSX"

console.log(heading); // It returns object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
