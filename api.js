export function APIRequest(who) {
  if (who === "server") {
    return fetch("https://b2a9dc36.ngrok.io").then(res => res.json());
  } else {
    return "no argument provided";
  }
}
