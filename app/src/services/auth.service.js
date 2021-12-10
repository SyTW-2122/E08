const API_URI = "http://localhost:3100";

export const authService = {
  login,
  register,
  verifyToken,
  logout,
};

async function login(user) {
  const configuration = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const request = await fetch(API_URI + "/singin", configuration);
  const requestJson = await request.json();

  return requestJson;
}

async function register(user) {
  const configuration = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const request = await fetch(API_URI + "/singup", configuration);
  const requestJson = await request.json();

  return requestJson;
}

async function verifyToken(token) {
  const configuration = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  };

  const verifyToken = await fetch(API_URI + "/verify", configuration);
  const verifyToJSON = await verifyToken.json();
  return verifyToJSON;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
