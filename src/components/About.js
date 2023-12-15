import React from "react";
import Users from "./Users";
import UsersClass from "./UsersClass";

class About extends React.Component {
  render (){
    return (
      <div>
        <h1>About</h1>
        <UsersClass name="Alok Class" location="Ballia"/>
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <UsersClass  />
//     </div>
//   );
// };

export default About;
