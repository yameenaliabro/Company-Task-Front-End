import React, { type ReactNode } from 'react'

function Container({ children }: { children: ReactNode }) {
    return (
        <div className='flex justify-center items-center'>
            {children}
        </div>
    )
}

export default Container