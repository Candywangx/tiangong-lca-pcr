import { createServer } from "node:http";
import { createReadStream, existsSync, realpathSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const defaultRoot = path.join(packageRoot, "dist");

function cliOptions(argv) {
  const options = { root: defaultRoot, port: 4173, host: "127.0.0.1" };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--root") {
      options.root = path.resolve(requiredOptionValue(argv, index, token));
      index += 1;
    } else if (token === "--port") {
      options.port = validPort(requiredOptionValue(argv, index, token));
      index += 1;
    } else if (token === "--host") {
      options.host = requiredOptionValue(argv, index, token);
      index += 1;
    } else {
      throw new Error(`Unknown option: ${token}`);
    }
  }
  return options;
}

export function serveViewer({ root = defaultRoot, port = 4173, host = "127.0.0.1" } = {}) {
  const requestedRoot = path.resolve(root);
  const resolvedRoot = existsSync(requestedRoot) ? realpathSync(requestedRoot) : requestedRoot;
  const resolvedPort = validPort(port);
  const indexPath = path.join(resolvedRoot, "index.html");
  if (!existsSync(indexPath)) {
    throw new Error(`Viewer build not found at ${resolvedRoot}. Run npm run viewer:build first.`);
  }

  const server = createServer((request, response) => {
    const requestUrl = new URL(request.url ?? "/", "http://localhost");
    let relativePath;
    try {
      relativePath = requestUrl.pathname === "/" ? "index.html" : decodeURIComponent(requestUrl.pathname.slice(1));
    } catch (error) {
      if (error instanceof URIError) {
        response.writeHead(400);
        response.end("Bad request");
        return;
      }
      throw error;
    }
    const filePath = path.resolve(resolvedRoot, relativePath);

    if (!isInsideOrEqual(resolvedRoot, filePath)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    if (!existsSync(filePath)) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const canonicalFilePath = realpathSync(filePath);
    if (!isInsideOrEqual(resolvedRoot, canonicalFilePath)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }
    if (!statSync(canonicalFilePath).isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": contentType(canonicalFilePath) });
    createReadStream(canonicalFilePath).pipe(response);
  });

  server.listen(resolvedPort, host, () => {
    const address = server.address();
    const actualPort = typeof address === "object" && address ? address.port : resolvedPort;
    console.log(`PCR viewer available at http://${host}:${actualPort}`);
  });

  return server;
}

function requiredOptionValue(argv, index, option) {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${option}`);
  }
  return value;
}

function validPort(value) {
  const port = Number(value);
  if (!Number.isInteger(port) || port < 0 || port > 65535) {
    throw new Error(`Invalid viewer port: ${value}. Expected an integer from 0 to 65535.`);
  }
  return port;
}

function isInsideOrEqual(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === "" || (
    relative !== ".." &&
    !relative.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relative)
  );
}

function contentType(filePath) {
  if (filePath.endsWith(".html")) {
    return "text/html; charset=utf-8";
  }
  if (filePath.endsWith(".css")) {
    return "text/css; charset=utf-8";
  }
  if (filePath.endsWith(".js")) {
    return "text/javascript; charset=utf-8";
  }
  if (filePath.endsWith(".json")) {
    return "application/json; charset=utf-8";
  }
  return "application/octet-stream";
}

if (isCliMain(import.meta.url)) {
  serveViewer(cliOptions(process.argv.slice(2)));
}

function isCliMain(moduleUrl) {
  return (
    Boolean(process.argv[1]) &&
    canonicalCliPath(fileURLToPath(moduleUrl)) === canonicalCliPath(process.argv[1])
  );
}

function canonicalCliPath(value) {
  const resolved = path.resolve(value);
  try {
    return realpathSync(resolved);
  } catch (error) {
    if (error?.code === "ENOENT") {
      return resolved;
    }
    throw error;
  }
}
