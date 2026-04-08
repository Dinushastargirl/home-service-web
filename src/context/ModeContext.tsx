import React, { createContext, useContext, useState, useEffect } from "react";

type Mode = "simple" | "creative";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("creative");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className={mode === "simple" ? "mode-simple" : "mode-creative"}>
        {children}
      </div>
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
};
