import { useContext } from "react";
import AppStatecontext from "../contexts/AppStateContext";

export default function useOrders() {
  const { orders } = useContext(AppStatecontext)

  return orders
}