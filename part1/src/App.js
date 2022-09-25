// d: A more complex state, debugging React apps: Handling arrays
import { useState } from 'react';

// Complex state
// const App = () => {
//   const [clicks, setClicks] = useState({ left: 0, right: 0 });

//   const handleLeftClick = () => {
//     setClicks({ ...clicks, left: clicks.left + 1 });
//   };

//   const handleRightClick = () => {
//     setClicks({ ...clicks, right: clicks.right + 1 });
//   };

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   );
// };

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  );
};

export default App;
