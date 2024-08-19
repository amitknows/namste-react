import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
this.state = {
  userInfo:{name: 'Dummy Name'
  }
}
   

   // console.log("child constructor");
  }
async componentDidMount(){
  // console.log('Child component did mount ')

const data =await fetch('https://api.github.com/users/amitknows')
const json =await data.json();

console.log(json)

this.setState({
  userInfo:json
})
// console.log('userinfo',userInfo)

}


componentDidUpdate(){
  console.log ('component did update')
}

componentWillUnmount(){
  console.log('component will unmount')
}
  render() {
    const { name, location , avatar_url} = this.state.userInfo;

   

    console.log(name);
    return (
      <div>
        <div>
          <h1>Class Based Component</h1>
        </div>
      
       <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
      
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
