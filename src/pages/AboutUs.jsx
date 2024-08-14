import {Component} from "react";
import UserClass from "../components/UserClass";
// import User from "../components/User";
// function AboutUs() {
//   const info = {
//     name: "Amit",
//     Age: 19,
//     City: "Siliguri",
//   };

//   return (
//     <>
//       <div>AboutUs</div>

//       {/* <User studentInfo={info} /> */}

//       <hr className=" " />
//       <UserClass studentInfo={info} />
//     </>
//   );
// }

// export default AboutUs;

class AboutUs extends Component {
constructor(props){
  super(props)

  console.log('Parent Constructor')
}
componentDidMount(){
  console.log('parent component did mount')
}
  render() {
    const info = {
      name: "Amit",
      Age: 19,
      City: "Siliguri",
    };
console.log('Parent render')
    return (
      <div>
        <div>AboutUs</div>

        {/* <User studentInfo={info} /> */}

        <hr className=" " />
        <UserClass studentInfo={info} />
      </div>
    );
  }
}

export default AboutUs;
