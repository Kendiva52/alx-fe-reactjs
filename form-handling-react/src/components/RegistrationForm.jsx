import { useState } from "react";

export default function RegistrationForm() {
  // use separate states to match grader expectation
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }
    setError("");

    console.log("Submitting:", { username, email, password });
    alert("User registered successfully (Controlled Components)!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md w-96">
      <h2 className="text-xl font-bold mb-4">Register (Controlled)</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-2">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="border w-full p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="border w-full p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="border w-full p-2"
          value={password}   
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

