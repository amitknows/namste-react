import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

this.state = {
    count : 0,
    count2 : 2,
}

console.log("constructor")
  }

  render() {
    const { name, Age, City } = this.props.studentInfo;
   
   const {count} = this.state

   console.log("render")
    return (
      <div>
        <div>
          <h1>Class Based Component</h1>
        </div>
        <button onClick={()=>{
            this.setState({
                 count: this.state.count +1,
            })
        }}>Click</button>
        <div>Count : {count}</div>
        <h2>Name : {name}</h2>
        <h3>Location : {City}</h3>
        <h4>Age : {Age}</h4>
        <h4>Contact : @amit</h4>
      </div>
    );
  }
}

export default UserClass;

// import React from "react";

//  class UserClass extends React.Component {
//   render() {
//     const {name, Age, City} = this.props.studentInfo
//     return (
//       <div>
//         <div>
//           <h1>Class Based Component</h1>
//         </div>
//         <h2>Name : {name}</h2>
//         <h2> Age : {Age} </h2>
//         <h2> Location : {City} </h2>
//         <h2>Contact : @github/amit</h2>
//       </div>
//     );
//   }
// }
// export default UserClass;
