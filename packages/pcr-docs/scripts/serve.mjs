import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."),
  root = path.join(app, "out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".yaml": "application/yaml; charset=utf-8",
};
createServer((request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405).end();
    return;
  }
  let url;
  try {
    url = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }
  if (url === "/zh/" || url === "/zh") {
    response.writeHead(301, { Location: "/" }).end();
    return;
  }
  let file = path.resolve(root, "." + url);
  if (!file.startsWith(root + path.sep) && file !== root) {
    response.writeHead(400).end();
    return;
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory())
    file = path.join(file, "index.html");
  let status = 200;
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    file = path.join(root, "404.html");
    status = 404;
  }
  const headers = {
    "Content-Type": types[path.extname(file)] ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
  };
  if (url.startsWith("/generated/")) headers["X-Robots-Tag"] = "noindex";
  if (url.startsWith("/generated/raw/"))
    headers["Content-Disposition"] = "attachment";
  response.writeHead(status, headers);
  if (request.method === "HEAD") response.end();
  else fs.createReadStream(file).pipe(response);
}).listen(4314, "127.0.0.1", () =>
  console.log("PCR static export: http://127.0.0.1:4314"),
);
