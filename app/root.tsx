import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// Import your stylesheets' paths
import stylesheet from "./talwind.css";
import styles from "antd/dist/reset.css";
export const links: LinksFunction = () => [
  // Use the paths of the imported stylesheets
  {
    rel: "stylesheet",
    href: styles,
  },
  { rel: "stylesheet", href: stylesheet },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
