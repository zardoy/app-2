import { defineVitConfig } from '@zardoy/vit'
import reactJsx from 'vite-react-jsx'

export default defineVitConfig({
    plugins: [reactJsx()],
})
