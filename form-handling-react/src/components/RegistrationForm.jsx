import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }

    if (!email) { 
      validationErrors.email = "Email is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Submitting:", { username, email, password });
    alert("User registered successfully (Controlled Components)!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md w-96">
      <h2 className="text-xl font-bold mb-4">Register (Controlled)</h2>

      <div className="mb-2">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="border w-full p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
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
        {errors.email && <p className="text-red-500">{errors.email}</p>}
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
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}


