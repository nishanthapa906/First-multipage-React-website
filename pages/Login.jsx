import React, { useState } from "react";

function Login() {
  // Step 2: create state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 3: handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2>Sign in with email</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Get Started
        </button>
      </form>
    </div>
  );
}

export default Login;

//styles
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eaf6ff",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
