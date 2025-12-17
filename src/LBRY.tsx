const VERSION_2_0: string = "2.0";

const CLAIM_SEARCH: string = "claim_search";
const GET: string = "get";
const PREFERENCE_GET: string = "preference_get";
const RESOLVE: string = "resolve";
const SETTINGS_GET: string = "settings_get";
const TXO_LIST: string = "txo_list";
const WALLET_BALANCE: string = "wallet_balance";

function generateID(): number {
  return Math.ceil(Math.random() * 65536) + 1;
}

function isUsingProxy(): boolean {
  return import.meta.env.VITE_DAEMON_PROXY === "true";
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
  CLAIM_SEARCH,
  GET,
  PREFERENCE_GET,
  RESOLVE,
  SETTINGS_GET,
  TXO_LIST,
  WALLET_BALANCE,
  isUsingProxy,
  rpc,
};
