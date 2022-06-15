import React from 'react';

// const title: React.ReactElement = (
//   <h1 className='text-center py-2'>
//     React+TS
//   </h1>
// )

// You can assing to children null | string | number etc or assign React.ReactNode

// const Headline = ({children}: { children: React.ReactNode } ) => {
//   return (
//     <h1 className='text-center py-2'>
//       {children}
//     </h1>
//   )
// }

// Also you can create custom props

interface Props {
  children?: React.ReactNode;
  id?: number;
  classname?: string
}

// const Headline = ({children, id, classname}: Props ) => {
//   return (
//     <h1 className='text-center py-2'>
//       {children}
//       {id}
//       {classname}
//     </h1>
//   )
// }

// Also you can create common type for function with generic

const Headline: React.FC<Props> = ({children, id, classname}: Props ) => {
  return (
    <h1 className='text-center py-2'>
      {children}
      {id}
      {classname}
    </h1>
  )
}

function App() {
  return (
    <div>
      <Headline id={1} classname={'Hello'}>
        <div>Hello</div>
      </Headline>
    </div>
  );
}

export default App;
