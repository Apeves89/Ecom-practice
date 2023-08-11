import { useEffect } from "react";

export default function BlogPage({ switchLink, page }) {
  useEffect(() => {
    switchLink(page);
  }, []);
  return (
    <>
      <h1>Blog</h1>
    </>
  );
}
