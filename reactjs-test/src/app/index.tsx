"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useInput } from "@/hooks/useInput";
import { FormEvent, useEffect, useState } from "react";

const HomeIndex = () => {
  const [email, onEmail] = useInput();
  const [password, onPassword] = useInput();
  const [user, setUser] = useState<string | null>(null);

  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", email);
      setUser(email);
      alert("Login success");
    } else {
      alert("Email and password is required");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Logout success");
  };

  if (!isClient) return null;

  return (
    <div className="flex items-center justify-center gap-3 w-full max-w-7xl mx-auto">
      {user ? (
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Selamat datang, {user.split("@")[0]}!
          </h1>
          <Button variant="danger" onClick={handleLogout} type="button">
            Logout
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="p-6 bg-neutral-400 rounded-xl flex flex-col gap-4 max-w-md w-full"
        >
          <Input
            name="email"
            type="email"
            value={email}
            onChange={onEmail}
            label="Enter your email"
          />
          <Input
            name="password"
            type="password"
            value={password}
            onChange={onPassword}
            label="Enter your password"
          />
          <Button variant="secondary" type="submit" className="mt-4">
            Login
          </Button>
        </form>
      )}
    </div>
  );
};

export default HomeIndex;
