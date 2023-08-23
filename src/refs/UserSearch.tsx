import { useEffect, useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);

    setUser(foundUser);
  };

  return (
    <div>
      UserSearch
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
