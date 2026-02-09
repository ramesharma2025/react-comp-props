export const MyTable = () => {
  const users = [
    {
      id: "1",
      name: "john",
      email: "john@doe",
    },
    {
      id: "2",
      name: "Siri",
      email: "siri@email.com",
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
