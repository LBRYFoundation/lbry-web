function NotFound() {
  if (import.meta.env.SSR) {
    throw new Error("404_NOT_FOUND");
  }

  return <div style={{ fontSize: "100px", textAlign: "center" }}>404</div>;
}

export default NotFound;
