import { useAuth } from "~/hooks";
import type { ReactNode } from "react"
import AuthTabs from "~/routes/auth";

function AuthGuard({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth();
    console.log("🚀 ~ file: AuthGuard.tsx:7 ~ AuthGuard ~ isAuthenticated:", isAuthenticated)

    if (isAuthenticated) {
        return (
            <AuthTabs />
        )
    }
    return children
}

export default AuthGuard