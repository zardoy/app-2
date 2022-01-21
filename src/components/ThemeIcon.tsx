import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import tw from 'twin.macro'

interface ComponentProps extends React.ComponentProps<'svg'> {
    icon: 'sun' | 'moon'
    active: boolean
}

const ThemeIcon: React.FC<ComponentProps> = ({ icon, active, ...props }) => {
    const path = icon === 'moon' ? mdiMoonWaningCrescent : mdiWhiteBalanceSunny
    return <Icon path={path} size="48px" css={[!active && tw`opacity-60 cursor-pointer`]} {...(props as any)} />
}

export default ThemeIcon
