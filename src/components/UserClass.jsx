import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

   

   // console.log("child constructor");
  }
async componentDidMount(){
  // console.log('Child component did mount ')

const data = fetch('https://api.github.com/users/amitknows')
console.log(data)
}
  render() {
    const { name, Age, City } = this.props.studentInfo;

    const { count } = this.state;

    console.log(" child render");
    return (
      <div>
        <div>
          <h1>Class Based Component</h1>
        </div>
      
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
