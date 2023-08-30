import React, { Suspense } from 'react'
import { ReactQueryClient } from '~/service'
import { Loading } from '~/components/Base'
import type { ReactNode } from "react"
import { AuthProvider } from '~/context'
import Theme from '~/assets/UI/Theme'

function Provider({ children }: { children: ReactNode }) {
    return (
        <Theme>

            <AuthProvider>
                <ReactQueryClient>
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                </ReactQueryClient>
            </AuthProvider>
        </Theme>
    )
}

export default Provider