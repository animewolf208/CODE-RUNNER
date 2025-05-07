const params = new URLSearchParams(window.location.search);
const score = params.get("score");
const total = params.get("total");

document.getElementById("result-container").innerHTML = \`
  <h2>You scored \${score} out of \${total}</h2>
  <button onclick="location.href='index.html'">Go Home</button>
\`;