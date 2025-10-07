"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CarbonMarketplaceContext = createContext();

export const CarbonMarketplaceProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // initialize user from localStorage if present
    try {
      const stored = localStorage.getItem("username");
      if (stored) {
        setUser({ username: stored });
      }
    } catch (err) {
      // ignore
    }
  }, []);

  const signIn = (userData) => {
    setUser(userData);
    try {
      if (userData && userData.username) {
        localStorage.setItem("username", userData.username);
      }
    } catch (err) {
      // ignore
    }
  };

  const signOut = () => {
    setUser(null);
    try {
      localStorage.removeItem("username");
    } catch (err) {
      // ignore
    }
  };

  const addProject = (project) => {
    if (user && user.role === "seller") {
      setUser({ ...user, projects: [...user.projects, project] });
    }
  };

  const purchaseProject = (project) => {
    if (user && user.role === "buyer") {
      setUser({ ...user, projects: [...user.projects, project] });
    }
  };

  return (
    <CarbonMarketplaceContext.Provider
      value={{ user, signIn, signOut, addProject, purchaseProject }}
    >
      {children}
    </CarbonMarketplaceContext.Provider>
  );
};

export const useCarbonMarketplace = () => {
  const context = useContext(CarbonMarketplaceContext);
  if (!context) {
    throw new Error(
      "useCarbonMarketplace must be used within a CarbonMarketplaceProvider"
    );
  }
  return context;
};
