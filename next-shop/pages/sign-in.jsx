import React, { useState } from "react";
import Page from "../components/Page";
import Input from "../components/Input";
import Label from "../components/Field";
import Button from "../components/Button";
import { fetchJson } from "../lib/api";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus({ loading: true, error: false });
      await sleep(2000);
      console.log("should submit", { email, password });
      const response = await fetchJson("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });
      setStatus({ loading: false, error: false });
      console.log("sign in:", { response });
    } catch (error) {
      setStatus({ loading: false, error: true });
    }
  };

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <Label label="Email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border"
          />
        </Label>
        <Label label="Password">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=""
          />
        </Label>
        {status.error && <p className="text-red-700">invalid credentials</p>}
        {status.loading ? (
          <p className="text-green-500">Loading...</p>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  );
}
