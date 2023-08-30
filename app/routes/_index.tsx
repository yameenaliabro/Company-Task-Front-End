import type { V2_MetaFunction } from "@remix-run/node";
import { AuthGuard } from "~/guard";
import { Provider } from "~/utils";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Provider>
          <AuthGuard>
            <Home />
          </AuthGuard>
        </Provider>
      </div>
    </QueryClientProvider>
  );
}
