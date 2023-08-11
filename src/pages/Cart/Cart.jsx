import { useEffect } from "react";

export default function Cart({ switchLink, page }) {
  useEffect(() => {
    switchLink(page);
  }, []);
  return (
    <>
      <h1>Cart</h1>
    </>
  );
}
