import React from 'react';

// const title: JSX.Element = (
//   <h1 className="text-center py-2">
//     React + TypeScript
//   </h1>
// )

// for React children
// const Headline = ({children} : { children : React.ReactNode}) => {
//   return (
//     <h1 className='text-center py-2'>
//       {children}
//     </h1>
//   )
// }

// for our props. we can assign interface or type of props or assign type to component

interface Props { 
  children?: React.ReactNode;
  id?: number;
  className?: string
}

// const Headline = ({children, id} : Props) => {
//   return (
//     <h1 className='text-center py-2'>
//       {children}
//       {id}
//     </h1>
//   )
// }

const Headline: React.FC<Props> = ({children, id}) => {
  return (
    <h1 className='text-center py-2'>
      {children}
      {id}
    </h1>
  )
}

function App() {
  return (
    <div>
      <Headline id={5}>
      React + TypeScript
      </Headline>
    </div>
  );
}

export default App;
