import React, { useState } from "react";

const Pet = (props) => {
  const [alive, setAlive] = useState(false);

  return (
    <div>
      <h1>{alive ? "alive" : "dead"}</h1>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
