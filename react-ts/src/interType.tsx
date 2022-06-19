// iterfave vs type

import { type } from "@testing-library/user-event/dist/type";

// You can use both interface and type but interface is priority for object

interface UserA {
  name: string;
  age: number;
}

type UserB {
  name: string;
  age: number;
}

const user:UserB = {
  name: 'Dima',
  age: 31
}

// You can use both interface and type but type is priority for function

interface SumA {
  (a: number, b: number): number
}

type SumB = (a: number, b: number) => number

const sum: SumB = (a, b) => a + b

// You can use type for primitive Alies

type UniqueId = string;

interface User {
  id: UniqueId;
}

// You can use type for turple (кортеж)

type State = [number, (n: number) => void]

const s: State = [1222, (n) => {}]

// You can use type for union

type A = {
  age: number;
}

type B = {
  name: string;
}

type C = A | B;

const obj: C = {
  name: 'Dima',
  age: 31,
}
