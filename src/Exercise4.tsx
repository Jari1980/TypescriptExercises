import { Exercise4Users } from "./Exercise4Users";

interface User {
  id: number;
  name: string;
  email: string;
}

export function Exercise4() {
    const { data: users, loading, error } = Exercise4Users<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!users) return null;
  
  return (
    <div>
      <h1>Exercise 4 - Fetch Users</h1>
      <h3>Goal: Fetch data from an API and display it.</h3>
      <h3>Key skills: useEffect, async/await, interfaces.</h3>
      <br />
      <h2>Task</h2>
      <h3>Add loading and error states.</h3> 
      <h3>Create a reusable hook useFetch&lt;T&gt;() to handle any API request.</h3>
      <br />
    <br />
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.name} ({u.email})
        </li>
      ))}
    </ul>
    </div>
  );
};