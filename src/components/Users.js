import React, { useState } from "react";

const Users = (props) => {
    const [count]=useState(1);
  return (
    <div className="about-card">
        <h2>Count:{count}</h2>
      <h2>Name:{props.name}</h2>
      <h2>Location:Ghaziabad</h2>
      <h2>Contact:@ALOKRANJAN0512</h2>
    </div>
  );
};

export default Users;
