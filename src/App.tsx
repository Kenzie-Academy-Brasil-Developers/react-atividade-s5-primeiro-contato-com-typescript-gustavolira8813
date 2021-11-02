import React, { useState } from "react";

import "./App.css";
import { Input } from "./components/input";
import { Card } from "./components/card";

interface User {
  name: string;
  hobby: string;
  age: number;
}

function App() {
  const [list, setList] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleSubmit = (name: string, hobby: string, age: number) => {
    const newUser = { name: name, hobby: hobby, age: age };

    setList([...list, newUser]);
  };
  const deleteUser = (user: User) => {
    const newList = list.filter((e) => e !== user);
    setList(newList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Hobby" onChange={(e) => setHobby(e.target.value)} />
        <Input
          placeholder="idade"
          type="number"
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />

        <button onClick={() => handleSubmit(name, hobby, age)}>add</button>
        <ul>
          {list.map((person, index) => (
            <li key={index}>
              <Card name={person.name} hobby={person.hobby} age={person.age} />
              <button onClick={() => deleteUser(person)}>Remover</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
