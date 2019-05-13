import { useState } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="home">
      Home
      <button type="button" onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default Home;
