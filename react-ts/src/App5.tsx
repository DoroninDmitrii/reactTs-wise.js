import React, { useRef } from 'react';

const Hooks = () => {

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      HTML
    </div>
  )
}

const App5 = () => {
  return (
    <div>
      <Hooks/>
    </div>
  );
};

export default App5;
