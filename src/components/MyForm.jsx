import { useState } from "react";

export const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cred = { name, email };
    console.log(cred.name, cred.email);
    alert(cred.name, cred.email);
    setName("");
    setEmail("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name:</label>
          <input type="text" value={name} onChange={handleName} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmail} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <p>FUllName is: {name}</p>
      <p>FUllName is: {email}</p>
    </>
  );
};
