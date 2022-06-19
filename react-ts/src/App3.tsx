import React, { useState } from 'react';

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {

  const [value, setValue] = useState<number>();

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(Number(e.target.value))
}

console.log(value)

  return (
    <input type="number" value={value} onChange={onChange} placeholder='Custom input' className='my-input' {...props}/>
  )
  }

const App3= () => {
  return (
    <div>
      <CustomInput/>
    </div>
  );
};

export default App3;
