// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'username'
const isUserSiteRepo = repository.toLowerCase().endsWith('.github.io')

const base = repository && !isUserSiteRepo ? `/${repository}` : '/'

export default defineConfig({
  output: 'static',
  site: process.env.SITE ?? `https://${owner}.github.io`,
  base,
  integrations: [react()],
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
    fallback: {
      ru: 'en',
    },
  },
})
