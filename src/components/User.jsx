import React from "react";
const User = ({studentInfo})=>{

const {name, Age, City }=(studentInfo)
    return(
        <div><h1>Functional Component</h1>
        <div>
            <h2>Name : {name} </h2>
            <h3>Location : {City} </h3>
            <h4>Age : {Age}</h4>
            <h4>Contact : @amit</h4>
        </div>
        </div>
    )
}


export default User;