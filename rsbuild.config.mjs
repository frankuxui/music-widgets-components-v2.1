import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [ pluginReact() ],
  server: {
    publicDir: 'public',
    port: 3000
  }
})
