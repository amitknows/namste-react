import React from "react";
import ReactDOM from "react-dom";


//React Element

const heading = (
  <h1 className="head">Namste React using JSX</h1>
)


// React functional Component
 const HeadingComponent = ()=>{
  return <h1>Namste React Functinoal Component 🚀</h1>;
  
  

 }


const root = ReactDOM.create(document.getElementById("root"));

root.render(heading)