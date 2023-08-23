import { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Alma', age: 20 },
  { name: 'Alan', age: 20 },
  { name: 'Brooke', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);

    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
