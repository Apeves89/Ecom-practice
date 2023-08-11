import { useEffect } from "react";

export default function ShopPage({ switchLink, page }) {
  useEffect(() => {
    switchLink(page);
  }, []);
  return (
    <>
      <h1>Shop</h1>
    </>
  );
}
