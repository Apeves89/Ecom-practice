import { useEffect } from "react";

export default function AboutPage({ switchLink, page }) {
  useEffect(() => {
    switchLink(page);
  }, []);
  return (
    <>
      <h1>About</h1>
    </>
  );
}
