import React, { useState } from 'react'
import LoginField from '../components/LoginField'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <form className="bg-purple-50 w-80 flex flex-col justify-center px-8 py-6 border border-purple-600 rounded-md">
                <p className="mb-4 text-4xl text-center text-purple-700">Nice.</p>
                <LoginField
                    label="Email or login"
                    value={email}
                    type="email"
                    autoComplete="email"
                    className=""
                    onChange={e => setEmail(e.target.value)}
                />
                <LoginField label="Password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
                <label>
                    <input type="checkbox" className="accent-purple-600 my-3" /> Maybe you want to check this?
                </label>
                <button type="submit" className="active:scale-95 hover:bg-purple-500 px-3 py-2 text-white transition transform bg-purple-600">
                    GET ME IN!
                </button>
            </form>
        </div>
    )
}

export default Login
