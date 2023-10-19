import { useContext, useState } from 'react';
import { UserContext } from './context/UserContext';
import './Users.css';
import { getRandomID } from './hooks/uuid';

export default function Users() {
  let { users, setUsers } = useContext(UserContext);
  const [userInputsValue, setUserInputsValue] = useState({
    name: '',
    password: '',
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (userInputsValue.name.length && userInputsValue.password.length) {
      setUsers([
        ...users,
        {
          id: getRandomID(),
          ...userInputsValue,
        },
      ]);

      userInputsValue.name = '';
      userInputsValue.password = '';

      document.querySelectorAll('.addUserFormInputControl').forEach((input) => {
        (input as HTMLInputElement).value = '';
      });
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="addUserFormInputControl"
            id="name"
            name="name"
            placeholder="Insert a name..."
            autoComplete="off"
            onChange={(e) => {
              setUserInputsValue({
                name: e.target.value,
                password: userInputsValue.password,
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="addUserFormInputControl"
            id="password"
            name="password"
            placeholder="Insert a password..."
            onChange={(e) => {
              setUserInputsValue({
                name: userInputsValue.name,
                password: e.target.value,
              });
            }}
          />
        </div>

        <button type="submit">Add User</button>
      </form>

      <section>
        <h1>Users</h1>

        <ul>
          {users.length ? (
            users.map((user) => {
              return (
                <li key={user.id}>
                  <h2>User: {user.name}</h2>
                  <p>Password: {user.password}</p>
                </li>
              );
            })
          ) : (
            <p>There's no one registered in the users list.</p>
          )}
        </ul>
      </section>
    </div>
  );
}
