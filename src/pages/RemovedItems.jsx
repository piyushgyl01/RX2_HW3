import { useSelector, useDispatch } from "react-redux";
import { fetchRemovedItems } from "../actions.js";
import { useEffect } from "react";

export default function RemovedItems() {
  const dispatch = useDispatch();
  const removedItems = useSelector((state) => state.removedItems);
  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);
  return (
    <>
      <h1>Removed Items From Inventory</h1>{" "}
      <h2>Removed Items Total: {removedItems.length}</h2>
      <ul>
        {removedItems.map((items, index) => (
          <li key={index}>
            {items.itemName}: {items.itemQuantity}
          </li>
        ))}
      </ul>
    </>
  );
}
