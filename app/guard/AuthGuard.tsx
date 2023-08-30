import { useAuth } from "../hooks";
import type { ReactNode } from "react"
import AuthTabs from "../routes/auth";

function AuthGuard({ children }: { children: ReactNode }) {
    const { isAuthenticated, userdata } = useAuth();
    console.log("🚀 ~ file: AuthGuard.tsx:7 ~ AuthGuard ~ userdata:", userdata)
    if (!isAuthenticated) {
        return (
            <AuthTabs />
        )
    }
    return children
}

export default AuthGuard