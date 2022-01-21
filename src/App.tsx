import React, { useState } from 'react'
import ThemeIcon from './components/ThemeIcon'
import Login from './pages/Login'

const App: React.FC = () => {
    const [variant, setVariant] = useState<'purple' | 'yellow'>('purple')

    return (
        <>
            <div tw="top-0 right-0 absolute flex">
                <ThemeIcon icon="moon" active={variant === 'purple'} tw="text-indigo-600" onClick={() => setVariant('purple')} />
                <ThemeIcon icon="sun" active={variant === 'yellow'} tw="text-yellow-400" onClick={() => setVariant('yellow')} />
            </div>
            <Login variant={variant} />
        </>
    )
}

export default App
