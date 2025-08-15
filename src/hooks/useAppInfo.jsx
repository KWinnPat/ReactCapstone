import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useAppInfo() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppInfo must be used within an AppProvider");
  }
  return context;
}
