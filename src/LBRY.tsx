const VERSION_2_0: string = "2.0";

function generateID(): number {
  return Math.ceil(Math.random() * 65536) + 1;
}

async function rpcDirect(
  input: string | URL | Request,
  method: string,
  params?: object,
  authorization?: string,
): Promise<object> {
  const headers: Headers = new Headers();
  if (authorization) {
    headers.append("Authorization", authorization);
  }
  headers.append("Content-Type", "application/json");

  const message: object = {
    jsonrpc: VERSION_2_0,
    method: method,
    params: params || undefined,
    id: generateID(),
  };

  return await (
    await fetch(input, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(message),
    })
  ).json();
}

async function rpcProxy(
  input: string | URL | Request,
  method: string,
  params?: object,
  authorization?: string,
): Promise<object> {
  const url: URL = new URL("/api/rpc", window.location.href);
  if (typeof input === "string") {
    url.searchParams.set("url", input);
  }
  if (input instanceof URL) {
    url.searchParams.set("url", input.href);
  }
  if (input instanceof Request) {
    url.searchParams.set("url", input.url);
  }
  return await rpcDirect(url, method, params, authorization);
}

async function rpc(
  input: string | URL | Request,
  method: string,
  params?: object,
  authorization?: string,
  proxy?: boolean,
): Promise<object> {
  if (proxy) {
    return await rpcProxy(input, method, params, authorization);
  }
  return await rpcDirect(input, method, params, authorization);
}

export default {
  rpc,
};
