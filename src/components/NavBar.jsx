import { useState } from "react";

function NavBar(props) {
  // const { title, content } = props;

  console.log(props.mydetails[0], "props first");
  console.log(props.mydetails[1], "props second");
  const firstvar = props.mydetails[0];
  const secondvar = props.mydetails[1];

  const [count, setCount] = useState(0);

  const handleCLick = () => {
    setCount(count + 1);
  };

  // console.log(props, "props");
  return (
    <>
      <h1> First: {firstvar}</h1>
      <p>Second: {secondvar}</p>
      <button onClick={handleCLick}>Click</button>
      <p>Count: {count}</p>
      {/* <h1>{props.mydet.name}</h1>
      <h1>{props.mydet.email}</h1>{" "} */}
      {/* <div>{props.children}</div> */}
    </>
  );
}

export default NavBar;
