import React, { useState } from 'react'
import LoginField from '../components/LoginField'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form className="rounded-md border px-8 py-6 border-purple-600 bg-purple-50 w-80 flex justify-center flex-col">
                <p className="text-purple-700 text-4xl mb-4 text-center">Nice.</p>
                <LoginField label="Email or login" value={email} type="email" autoComplete="email" onChange={e => setEmail(e.target.value)} />
                <LoginField label="Password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
                <label>
                    <input type="checkbox" className="my-3 accent-purple-600" /> Maybe you want to check this?
                </label>
                <button type="submit" className="bg-purple-600 px-3 py-2 transition active:scale-95 transform hover:bg-purple-500 text-white">
                    GET ME IN!
                </button>
            </form>
        </div>
    )
}

export default Login
