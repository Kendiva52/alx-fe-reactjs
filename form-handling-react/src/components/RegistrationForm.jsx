import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    setError("");

    console.log("Submitting:", formData);
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
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="border w-full p-2"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="border w-full p-2"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

