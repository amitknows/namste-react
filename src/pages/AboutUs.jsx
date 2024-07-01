import React from "react";
import UserClass from "../components/UserClass";
import User from "../components/User";
function AboutUs() {
  const info = {
    name: "Amit",
    Age: 19,
    City: "Siliguri",
  };

  return (
    <>
      <div>AboutUs</div>

      <User studentInfo={info} />

      <hr className=" " />
      <UserClass studentInfo={info} />
    </>
  );
}

export default AboutUs;
