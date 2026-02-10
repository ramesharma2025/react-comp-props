//Custom hook for counter useCounter
import useCounter from "../hooks/useCounter";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

// // import React, { Component } from "react";

// // class Counter extends Component {
// //   constructor(props) {
// //     super(props);

// //     // state
// //     this.state = {
// //       count: 0,
// //     };

// //     // binding
// //     this.increment = this.increment.bind(this);
// //   }

// //   componentDidMount() {
// //     console.log("Component mounted");
// //   }

// //   increment() {
// //     this.setState({
// //       count: this.state.count + 1,
// //     });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h2>Count: {this.state.count}</h2>
// //         <button onClick={this.increment}>+</button>
// //       </div>
// //     );
// //   }
// // }

// export default Counter;

// import { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted");
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// };

// export default Counter;
