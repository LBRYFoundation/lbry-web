import react from "@vitejs/plugin-react";
import type EventEmitter from "events";
import type ClientRequest from "http";
import path from "path";
import { defineConfig } from "vite";
import type ProxyOptions from "vite";

const proxyConfig: ProxyOptions = {
  // Only for development
  configure: (proxy: EventEmitter, options: ProxyOptions): void => {
    options.rewrite = (path: string): string => {
      const proxyURL: URL = new URL(path, "file:");
      const url: URL = new URL(proxyURL.searchParams.get("url"));

      options.target = url.origin;
      return url.pathname + url.search;
    };
    proxy.on("proxyReq", (proxyReq: ClientRequest): void => {
      proxyReq.removeHeader("Origin");
    });
  },
  secure: false,
};

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/proxy": proxyConfig,
      "/api/rpc": proxyConfig,
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});
