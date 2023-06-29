export default async function logout() {
  fetch("http://localhost:3001/session", {
    method: "DELETE",
    credentials: "include",
  })
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}
