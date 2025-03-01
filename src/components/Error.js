import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Oops!
      </h1>
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        Something went wrong or the page was not found.
      </p>
      <p>{err.error.message}</p>
      <a
        href="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Go Home
      </a>
    </div>
  );
}
