import React from "react";
class UserClass extends React.Component{


render(){
        const {name, Age , City}=this.props.studentInfo
        return(
            <div>
                <div><h1>Class Based Component</h1></div>
            <h2>Name : {name}</h2>
            <h3>Location : {City}</h3>
            <h4>Age : {Age}</h4>
            <h4>Contact : @amit</h4>
        </div>
        )
    }

}

export default UserClass;