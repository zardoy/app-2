import { SetRequired } from 'type-fest'
import React from 'react'
import { css, theme } from 'twin.macro'

interface ComponentProps extends SetRequired<React.ComponentProps<'input'>, 'value' | 'onChange'> {
    label: string
    isCollapsed?: boolean
}

const LoginField: React.FC<ComponentProps> = ({ label, children, isCollapsed = false, ...inputProps }) => (
    <label>
        <span tw="dark:text-white w-full text-sm text">{label}</span>
        <input
            css={[
                css`
                    &:focus {
                        outline: 2px solid var(--color-primary);
                        outline-offset: 2px;
                    }
                `,
            ]}
            tw="w-full py-1 text-lg border border-none rounded"
            {...inputProps}
        />
    </label>
)

export default LoginField
