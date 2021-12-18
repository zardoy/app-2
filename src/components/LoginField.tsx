import { SetRequired } from 'type-fest'
import React from 'react'

interface ComponentProps extends SetRequired<React.ComponentProps<'input'>, 'value' | 'onChange'> {
    label: string
}

const LoginField: React.FC<ComponentProps> = ({ label, children, ...inputProps }) => (
    <label>
        <span className="dark:text-white w-full text-purple-800 text-sm">{label}</span>
        <input className="border-none rounded py-1 border w-full text-lg focus:outline-solid-purple-800" {...inputProps} />
    </label>
)

export default LoginField
