import { useContext } from "react";
import AppStatecontext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToOrder, remove, removeAll } = useContext(AppStatecontext)

  return { addToOrder, remove, removeAll }
}