/* eslint-disable*/
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

const AuthContext = createContext();

export async function handleSignup(data) {
  const { email, password } = data;
  const { data: signupData, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error("Signup error:", error);
  }
  return signupData;
}

export async function handleLogin(data) {
  const { email, password } = data;
  const { data: loginData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error("Login error:", error);
    return null;
  }
  return loginData;
}

export async function getSessionData() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Session error:", error);
    return null;
  }
  return data;
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error);
    } else {
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleSignup, handleLogin, logout, getSessionData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
