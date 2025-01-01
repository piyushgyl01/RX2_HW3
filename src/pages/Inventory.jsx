import { useSelector, useDispatch } from "react-redux";
import { fetchInventory } from "../actions.js";
import { useEffect } from "react";

export default function Inventory() {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  return (
    <>
      <h1>Inventory</h1>
      <h2>Total Inventory Items: {inventory.length}</h2>
      <ul>
        {inventory.map((items, index) => (
          <li key={index}>
            {items.itemName}: {items.itemQuantity}
          </li>
        ))}
      </ul>
    </>
  );
}
