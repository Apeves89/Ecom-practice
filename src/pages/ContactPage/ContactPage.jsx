import { useEffect } from "react";

export default function ContactPage({ switchLink, page }) {
  useEffect(() => {
    switchLink(page);
  }, []);
  return (
    <>
      <h1>Contact</h1>
    </>
  );
}
