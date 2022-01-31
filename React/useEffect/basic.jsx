import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [updated, setUpdated] = useState(false);
  const [title, setTitle] = useState("Hello World");

  useEffect(() => {
    if (updated) {
      setTitle("Update World");
    }
  });

  const update = () => setUpdated(!updated);

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={update}>Click Here</button>
    </div>
  );
}
