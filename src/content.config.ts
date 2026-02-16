import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
})

export const collections = {
  about: aboutCollection,
}
