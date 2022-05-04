import { useContext } from "react";
import AppStatecontext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const { prototypes } = useContext(AppStatecontext)

  return prototypes
}