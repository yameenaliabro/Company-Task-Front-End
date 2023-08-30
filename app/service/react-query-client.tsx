import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';

const queryClient = new QueryClient();

function ReactQueryClient({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {/* Your app components */}
            {children}
        </QueryClientProvider>
    );
}
export default ReactQueryClient
