"use client";

import React, { createContext, useContext, useState } from "react";

const CarbonMarketplaceContext = createContext();

export const CarbonMarketplaceProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (userData) => {
    setUser(userData);
  };

  const signOut = () => {
    setUser(null);
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
