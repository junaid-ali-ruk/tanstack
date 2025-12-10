import React from 'react'

export function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <a href="/">Go back to home</a>
        </div>
    )
}