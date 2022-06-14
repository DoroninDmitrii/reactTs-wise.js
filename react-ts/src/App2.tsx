import React from 'react';

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return (
    <input onChange={onChange} placeholder='Custom input' className='my-input' {...props}/>
  )
}

const App2 = () => {
  return (
    <div>
      <CustomInput type='text' maxLength={5}/>
    </div>
  );
};

export default App2;
