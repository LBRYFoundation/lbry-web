import express from "express";
import path from "path";

const app: Express.Application = express();

process.loadEnvFile();

app.use(express.json());
app.use(express.static("dist"));

app.get(
  "/api/proxy",
  (req: Express.Request, res: Express.Response, next): void => {
    if (!req.query.url) {
      res.header("Content-Type", "text/plain").status(400).send("Error");
      return;
    }

    const headers: Headers = new Headers();
    if (req.header("Authorization")) {
      headers.append("Authorization", req.header("Authorization"));
    }

    fetch(req.query.url, {
      method: "GET",
      headers: headers,
    })
      .then((resp: Response): void => {
        res.header("Content-Type", resp.headers.get("Content-Type"));
        resp
          .text()
          .then((text: string): void => {
            res.send(text);
          })
          .catch(next);
      })
      .catch(next);
  },
);

app.post(
  "/api/rpc",
  (req: Express.Request, res: Express.Response, next): void => {
    if (!req.query.url) {
      res.json({
        jsonrpc: "2.0",
        id: req.body.id,
        error: {
          message: "Missing URL",
        },
      });
      return;
    }

    const headers: Headers = new Headers();
    if (req.header("Authorization")) {
      headers.append("Authorization", req.header("Authorization"));
    }
    if (req.header("Content-Type")) {
      headers.append("Content-Type", req.header("Content-Type"));
    }

    fetch(req.query.url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(req.body),
    })
      .then((resp: Response): void => {
        resp
          .json()
          .then((json): void => {
            res.json(json);
          })
          .catch(next);
      })
      .catch(next);
  },
);

app.get("*fallback", (_, res: Express.Response): void => {
  res.sendFile(path.join(path.resolve(), "dist/index.html"));
});

const server = app.listen(3000);

export default server;
