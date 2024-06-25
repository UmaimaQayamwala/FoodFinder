import { useState } from "react";
const User = (props) => {
  const [count, setcount] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>count:{count}</h1>
      <h1>count:{count2}</h1>
      <h2>Name:{props.name}</h2>
      <h2>Location:</h2>
      <h3>Gmail:</h3>
    </div>
  );
};
export default User;
