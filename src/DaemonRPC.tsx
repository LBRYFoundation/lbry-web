import { useEffect, useState } from "react";

function useDaemonRPC(): string {
  const [daemon, setDaemon] = useState(
    new URL(import.meta.env.VITE_DAEMON_STATIC).toString(),
  );

  //TODO Do daemon discovery when no static daemon set.

  useEffect((): void => {
    if (!daemon) {
      cookieStore.get("DAEMON_RPC").then((cookie: CookieListItem): void => {
        setDaemon(cookie.value);
      });
    }
  }, [daemon]);

  return daemon;
}

export default useDaemonRPC;
