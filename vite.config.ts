import { defineVitConfig } from '@zardoy/vit'
import react from '@vitejs/plugin-react'

export default defineVitConfig({
    plugins: [react()],
})
