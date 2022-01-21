import { lighten } from 'polished'
import React, { useState } from 'react'
import tw, { theme, styled, css } from 'twin.macro'
import LoginField from '../components/LoginField'

const StyledCheckbox = styled.input`
    ${tw`my-3`}
    accent-color: var(--color-primary);
`

type VariantProp = {
    variant: 'purple' | 'yellow'
}

// #region FORM COMPONENTS
const LogoText = styled.h2(() => [tw`mb-4 text-4xl text-center text-secondary`])

const LoginButton = styled.button<VariantProp>(({ variant }) => [
    tw`active:scale-95 transform-gpu px-3 py-2 text-white transition transform scale-100 bg-primary`,
    css`
        :hover {
            background-color: ${themeColor[variant].bgHover};
        }
    `,
])
// #endregion

const themeColor = {
    purple: {
        primary: theme`colors.purple.600`,
        bgHover: lighten(0.05, theme`colors.purple.600`),
        text: theme`colors.purple.700`,
        textDark: theme`colors.purple.800`,
    },
    yellow: {
        primary: theme`colors.yellow.600`,
        bgHover: lighten(0.05, theme`colors.yellow.600`),
        text: theme`colors.yellow.700`,
        textDark: theme`colors.yellow.800`,
    },
}

const formBg = {
    purple: tw`bg-purple-50`,
    yellow: tw`bg-yellow-50`,
}

const Login: React.FC<VariantProp> = ({ variant }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div
            css={[
                css`
                    /* Scoped theming */
                    --color-primary: ${themeColor[variant].primary};
                    --text-secondary: ${themeColor[variant].text};
                    --text-primary: ${themeColor[variant].textDark};
                `,
                tw`flex items-center justify-center w-full h-screen transition-colors`,
            ]}
        >
            <form css={[formBg[variant], tw`w-80 flex flex-col justify-center px-8 py-6 border rounded-md border-primary`]}>
                <LogoText {...{ variant }}>Nice.</LogoText>
                <LoginField label="Email or login" value={email} type="email" autoComplete="email" onChange={e => setEmail(e.target.value)} />
                <LoginField label="Password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
                <label>
                    <StyledCheckbox type="checkbox" /> Maybe you want to check this?
                </label>
                <LoginButton type="submit" {...{ variant }}>
                    GET ME IN!
                </LoginButton>
            </form>
        </div>
    )
}

export default Login
