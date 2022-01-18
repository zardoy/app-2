import { SetRequired } from 'type-fest'
import React from 'react'

interface ComponentProps extends SetRequired<React.ComponentProps<'input'>, 'value' | 'onChange'> {
    label: string
}

const LoginField: React.FC<ComponentProps> = ({ label, children, ...inputProps }) => (
    <label>
        <span className="dark:text-white w-full text-sm text-purple-800">{label}</span>
        <input className="focus:outline-solid-purple-800 w-full py-1 text-lg border border-none rounded" {...inputProps} />
    </label>
)

export default LoginField
