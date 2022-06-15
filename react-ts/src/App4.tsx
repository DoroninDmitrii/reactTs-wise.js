import React, { useEffect, useState } from 'react';

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

async function getPerson (id=1): Promise<Person> {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  return response.json()
}

const Hooks = () => {

  const [person, setPerson] = useState<Person | null>(null)

  useEffect(() => {
    getPerson().then(data => setPerson(data) )
  })
  return (
    <div>
      {person?.name}
    </div>
  )
}

const App4 = () => {
  return (
    <div>
      <Hooks/>
    </div>
  );
};

export default App4;
