import mdiMoonWaningCrescent from '@iconify-icons/mdi/moon-waning-crescent'
import mdiWhiteBalanceSunny from '@iconify-icons/mdi/white-balance-sunny'
import { Icon } from '@iconify/react'
import React from 'react'
import tw from 'twin.macro'

interface ComponentProps extends React.ComponentProps<'svg'> {
    icon: 'sun' | 'moon'
    active: boolean
}

const ThemeIcon: React.FC<ComponentProps> = ({ icon: iconProp, active, ...props }) => {
    const icon = iconProp === 'moon' ? mdiMoonWaningCrescent : mdiWhiteBalanceSunny
    return <Icon icon={icon} css={[tw`w-[48px] h-[48px]`, !active && tw`opacity-50 cursor-pointer`]} {...(props as any)} />
}

export default ThemeIcon
