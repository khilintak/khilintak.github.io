const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const DATA_FILE = path.join(__dirname, "planet-plus-data.json");
const DEFAULT_STATE = {
  activities: [],
  waterLogs: [],
  trees: [],
  verifiedActions: [],
  completedChallenges: [],
};

function readState() {
  try {
    return { ...DEFAULT_STATE, ...JSON.parse(fs.readFileSync(DATA_FILE, "utf8")) };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function writeState(state) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ ...DEFAULT_STATE, ...state }, null, 2));
}

function send(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,PUT,OPTIONS",
  });
  response.end(JSON.stringify(payload));
}

const server = http.createServer((request, response) => {
  if (request.method === "OPTIONS") return send(response, 204, {});
  if (request.url !== "/api/state") return send(response, 404, { error: "Not found" });

  if (request.method === "GET") return send(response, 200, readState());
  if (request.method !== "PUT") return send(response, 405, { error: "Method not allowed" });

  let body = "";
  request.on("data", (chunk) => { body += chunk; });
  request.on("end", () => {
    try {
      const state = JSON.parse(body || "{}");
      writeState(state);
      send(response, 200, readState());
    } catch {
      send(response, 400, { error: "Invalid JSON" });
    }
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Planet Plus API listening on http://localhost:${PORT}/api`);
});
