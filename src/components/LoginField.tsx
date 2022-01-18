import { SetRequired } from 'type-fest'
import React from 'react'
import { css } from 'linaria'
import { theme } from 'twin.macro'

interface ComponentProps extends SetRequired<React.ComponentProps<'input'>, 'value' | 'onChange'> {
    label: string
}

const LoginField: React.FC<ComponentProps> = ({ label, children, ...inputProps }) => (
    <label>
        <span tw="dark:text-white w-full text-sm text-purple-800">{label}</span>
        <input
            tw="w-full py-1 text-lg border border-none rounded"
            // TODO use css
            className={css`
                &:focus {
                    outline: 2px solid ${theme`colors.purple.800`};
                    outline-offset: 2px;
                }
            `}
            {...inputProps}
        />
    </label>
)

export default LoginField
