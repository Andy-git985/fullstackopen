// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
//     </div>
//   );
// };

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = 'Peter';
//   const age = 10;
//   return (
//     <>
//       <div>
//         <h1>Greetings</h1>
//         <Hello name="Maya" age={26 + 10} />
//         <Hello name={name} age={age} />
//         <Footer />
//       </div>
//     </>
//   );
// };ss

// Page re-rendering
// const App = (props) => {
//   const { counter } = props;
//   return <div>{counter}</div>;
// };

// Stateful component
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // Event handling
  // const handleClick = () => {
  //   console.log('clicked');
  // };

  // from Stateful component
  // setTimeout(() => setCounter(counter + 1), 1000);

  const increaseByOne = () => setCounter(counter + 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};

export default App;
